/// <reference path="../../jsx/index.d.ts" />
/// <reference path="./_shim.ts" />
interface IStems {
    // id:number;
    parent?:IStems;
    layers:Array<ArtLayer>;
    stems:Array<IStems>;
    color:string;
}
function isLikeRectName(layer:ArtLayer) {
    return layer.name.indexOf('矩形') === 0;
}
/*判断是否矩形 40 x 100 而且填充色为纯色 */
function isLikeRectSizeAndColor(layer:ArtLayer) {
    const [x1,y1,x2,y2] = layer.bounds;
    const w:number = x2.value - x1.value;
    const h:number = y2.value - y1.value;
    return ((h > 40 && w > 100) || (h > 100 && w > 40)) && isBgLayer(layer);
}

/* 判断b1是否完全包含b2, 当返回null时为互不包含。*/
function contains(b1:UnitRect, b2:UnitRect):boolean {
    var b:boolean = null;
    if (b1[0].value >= b2[0].value &&
        b1[1].value >= b2[1].value &&
        b1[2].value <= b2[2].value &&
        b1[3].value <= b2[3].value) {
        b = false;
    } else if (
        b2[0].value >= b1[0].value &&
        b2[1].value >= b1[1].value &&
        b2[2].value <= b1[2].value &&
        b2[3].value <= b1[3].value
    ) {
        b = true;
    }
    return b;
}
/* index 用于命名不重复 */
var hasGrouped:Array<number> = [];//id;
function walkMoveGroup(g:IStems, iii:number = Math.random()):LayerSet {
    if (g.layers && g.layers.length > 0 && hasGrouped.indexOf(g.layers[0].id)) {

        var ids:Array<number> = [];
        for (var j = 0; j < g.layers.length; j++) {
            var isBg = g.layers[j].positionLocked && j === g.layers.length - 1;
            if (!g.layers[j].isBackgroundLayer && !isBg) {
                // g.layers[j].move(stemsGroup, ElementPlacement.INSIDE);
                ids.push(g.layers[j].id);
            }
        }
        // hasGrouped.push(g.layers[0].id);
        // app.activeDocument.activeLayer.name = 'gp' + (i + 1) + g.color;
        if (g.stems && g.stems.length > 0) {
            for (var j = 0; j < g.stems.length; j++) {
                var stem:LayerSet = walkMoveGroup(g.stems[j], (iii + 1 + j));
                ids.push(stem.id);
            }
        }
        var indexes = [];
        for (var i = 0; i < ids.length; i++) {
            indexes.push(getLayerIndexByID(ids[i]));
        }
        setSelectedLayers(indexes);
        groupSelected('gp' + (iii + 1) + (g.color||'') );
        var stemsGroup:LayerSet = <LayerSet> app.activeDocument.activeLayer;
        return stemsGroup;
    }
}


function groupAll(layerSet:Document|LayerSet) {
    // 处理已有图层组 LayerSet
    var layerSets1 = layerSet.layerSets;
    for (var i = layerSets1.length - 1; i >= 0; i--) {
        var layerSets2 = layerSets1[i].layerSets;
        for (var j = layerSets2.length - 1; j >= 0; j--) {
            app.activeDocument.activeLayer = layerSets2[j];
            ungroup();
        }
        app.activeDocument.activeLayer = layerSets1[i];
        ungroup();
    }
    var layers:Array<ArtLayer> = layerSet.artLayers;
    var groups:Array<IStems> = [];
    var nonRects:Array<ArtLayer> = [];
    var linked:Array<Layer> = [];//会被当成组,需要排除
    for (var i = 0; i < layers.length; i++) {
        linked = linked.concat(layers[i].linkedLayers);
    }
    //如果是clipping mask,则合并
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].grouped) {
            setSelectedLayers([getLayerIndexByID(layers[i].id), getLayerIndexByID(layers[i+1].id)]);
            layers[i].name = '@@group';
            layers[i].merge();
        }
    }
    for (var i = 0; i < layers.length; i++) {
        var layer:ArtLayer = layers[i];
        // var n = getLayerID();
        // $.writeln (layer.name);
        var isBg = layer.positionLocked && i === layers.length - 1;
        if (!layer.isBackgroundLayer && !isBg) {
            app.activeDocument.activeLayer = layer;
            if (!layer.grouped && linked.indexOf(layer) === -1 && 
                (layer.name == '@@group' || isLikeRectName(layer) || isLikeRectSizeAndColor(layer))) {
                var color = getLayerColor(layer);
                groups.push({
                    // id: n,
                    layers: [layer],
                    stems: [],
                    parent: null,
                    color: color
                });
            } else {
                nonRects.push(layer);
                if (layer.grouped) {
                    i++;
                    nonRects.push(layers[i]);
                }
            }
        }
    }

    //将非矩形的放入最小尺寸的组中
    for (var i = 0; i < nonRects.length; i++) {
        var layer:ArtLayer = nonRects[i];
        for (var j = 0; j < groups.length; j++) {
            var g = groups[j];
            if (contains(g.layers[0].bounds, layer.bounds) === true) {
                g.layers.splice(1, 0, layer); //第一个图层为背景层, 所以放入第二位置
                break; //nonRects是自上而下取的图层,上面的图层尺寸要比下面的图层的小
            }
        }
    }

    //组嵌套组
    var tops:Array<IStems> = [];
    for (var i = 0; i < groups.length - 1; i++) {
        for (var j = i + 1; j < groups.length; j++) {
            var g1:IStems = groups[i];
            var g2:IStems = groups[j];
            var b1 = g1.layers[0].bounds;
            var b2 = g2.layers[0].bounds;
            var isContain = contains(b1, b2);
            var parent:IStems, child:IStems;
            if (isContain === true) {
                parent = g1;
                child = g2;
            } else if (isContain === false) {
                parent = g2;
                child = g1;
            }
            if (parent && child) {
                if (child.parent == null) {
                    child.parent = parent;
                    parent.stems.push(child);
                } else {
                    var isContainGrand = contains(parent.layers[0].bounds, child.parent.layers[0].bounds);
                    if (isContainGrand === true) {
                        child.parent = parent;
                        parent.stems.push(child.parent);
                    } else if (isContainGrand === false) {
                        var childParent = child.parent;
                        var n = child.parent.stems.indexOf(child);
                        child.parent.stems.splice(n, 1);
                        //处理 g1 g2
                        child.parent = parent;
                        parent.stems.push(child);
                        //处理 g1 g2.p
                        if (childParent.layers[0] != parent.layers[0]) {
                            parent.parent = childParent;
                            childParent.stems.push(parent);
                        }
                    }
                }
            }
        }
    }

    for (var i = 0; i < groups.length; i++) {
        var g = groups[i];
        if (g.parent == null) {
            walkMoveGroup(g, i * 100);
        }
    }

}