/// <reference path="jsx/index.d.ts" />
var kkk = 999;
function rename() {
    function changeLayerName(layer, index) {
        var layers = layer.layers;
        if (layers) {
            var item = null;
            for (var i = 0; i < layers.length; i++) {
                var j = (index - 1) * 1000 + (kkk--);
                item = layers[i];
                if (item.visible == false) {
                    item.name = 'hide';
                    changeLayerName(layers[i], index - i);
                    item.visible = false;
                }
                else if (item.name.indexOf('gp') === 0) {
                    changeLayerName(layers[i], index - i);
                }
                else {
                    if (item.kind == LayerKind.SOLIDFILL) {
                        //形状图层，矢量，可能为按钮或背景图形
                        var bounds = item.bounds;
                        var x1 = parseInt(bounds[0]);
                        var y1 = parseInt(bounds[1]);
                        var x2 = parseInt(bounds[2]);
                        var y2 = parseInt(bounds[3]);
                        //假设为背景
                        if (y2 - y1 > 40 && x2 - x1 > 100 || y2 - y1 > 100 && x2 - x1 > 40) {
                            if (getColor(item).length > 0) {
                                //取得背景色
                                // item.rasterize(RasterizeType.ENTIRELAYER);
                                item.name = "bgc_" + j + ""; //+getColor(item);
                            }
                            else {
                                //取不了背景色
                                item.name = "block_no_" + j;
                            }
                        }
                        else if (y2 - y1 < 3 || x2 - x1 < 3) {
                            item.name = "line_" + j + getColor(item);
                        }
                        else {
                            //图片
                            item.rasterize(RasterizeType.ENTIRELAYER);
                            item.name = "block_" + j + ".png@" + 'zlg';
                        }
                    }
                    else if (item.kind == LayerKind.TEXT) {
                        item.name = "txt_" + j;
                    }
                    else if (item.name == '图层 1') {
                        item.name = "*bg_" + j + getColor(item);
                    }
                    else if (item.name.indexOf('矩形') == 0) {
                        item.rasterize(RasterizeType.ENTIRELAYER);
                        item.name = "shape_" + j + ".gif";
                    }
                    else {
                        item.name = "bg_" + j + "";
                    }
                    changeLayerName(layers[i], index - i);
                }
            }
        }
    }
    function getColor(item, isAllSame) {
        if (item == null)
            return '';
        var bounds = item.bounds;
        var x1 = parseInt(bounds[0]);
        var y1 = parseInt(bounds[1]);
        var x2 = parseInt(bounds[2]);
        var y2 = parseInt(bounds[3]);
        var color = '';
        app.activeDocument.colorSamplers.removeAll();
        var xx1 = x1 + (x2 - x1) * 0.50;
        var yy1 = y1 + (y2 - y1) * 0.50;
        var xx2 = x1 + (x2 - x1) * 0.01;
        var yy2 = y1 + (y2 - y1) * 0.01;
        var xx3 = x1 + (x2 - x1) * 0.99;
        var yy3 = y1 + (y2 - y1) * 0.01;
        var xx4 = x1 + (x2 - x1) * 0.01;
        var yy4 = y1 + (y2 - y1) * 0.99;
        var xx5 = x1 + (x2 - x1) * 0.99;
        var yy5 = y1 + (y2 - y1) * 0.99;
        var points = [[xx1, yy1], [xx2, yy2], [xx3, yy3], [xx4, yy4], [xx5, yy5]];
        var colors = [];
        try {
            for (var i = 0; i < points.length; i++) {
                if (points[i][0] >= 0 &&
                    points[i][1] >= 0 &&
                    points[i][0] <= app.activeDocument.width.value &&
                    points[i][1] <= app.activeDocument.height.value) {
                    var uv = [UnitValue(points[i][0], "px"), UnitValue(points[i][1], "px")];
                    var colorSampler = app.activeDocument.colorSamplers.add(uv);
                    var c = '#' + colorSampler.color.rgb.hexValue;
                    if (colors[c] == null)
                        colors[c] = 0;
                    colors[c]++;
                }
            }
            var max = 0;
            for (var k in colors) {
                if (colors[k] > max) {
                    max = colors[k];
                    color = k;
                }
            }
            if (isAllSame && max != 5) {
                color = '';
            }
        }
        catch (e) {
            color = '';
        }
        return color;
    }
    function groupAll(item) {
        var layers = item.artLayers;
        var groups = [];
        var nonRects = [];
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            var isLikeRectName = layer.name.indexOf('矩形') === 0;
            var x1 = parseInt(layer.bounds[0]);
            var y1 = parseInt(layer.bounds[1]);
            var x2 = parseInt(layer.bounds[2]);
            var y2 = parseInt(layer.bounds[3]);
            var isLikeRectSizeAndColor = ((y2 - y1 > 40 && x2 - x1 > 100) || (y2 - y1 > 100 && x2 - x1 > 40)
                && getColor(layer, true).length > 0);
            if (isLikeRectName || isLikeRectSizeAndColor) {
                groups.push({
                    layers: [layer],
                    stems: [],
                    parents: [],
                    x: layer.bounds[0].value,
                    y: layer.bounds[1].value,
                    w: layer.bounds[2].value,
                    h: layer.bounds[3].value
                });
            }
            else {
                nonRects.push(layer);
            }
        }
        //将非矩形的放入组中, 这里不区别第外组,内组
        for (var i = 0; i < nonRects.length; i++) {
            var layer = nonRects[i];
            for (var j = 0; j < groups.length; j++) {
                var g = groups[j];
                var b = layer.bounds;
                if (b[0].value >= g.x &&
                    b[1].value >= g.y &&
                    b[2].value <= g.w &&
                    b[3].value <= g.h) {
                    g.layers.push(layer);
                }
            }
        }
        //组嵌套组
        for (var i = 0; i < groups.length - 1; i++) {
            for (var j = i + 1; j < groups.length; j++) {
                var g1 = groups[i];
                var g2 = groups[j];
                var b1 = g1.layers[0].bounds;
                var b2 = g2.layers[0].bounds;
                if (b1[0].value >= b2[0].value &&
                    b1[1].value >= b2[1].value &&
                    b1[2].value <= b2[2].value &&
                    b1[3].value <= b2[3].value) {
                    g2.stems.push(g1);
                    g1.parents.push(g2);
                }
            }
        }
        var first = layers[layers.length - 1]; //背景层
        for (var i = 0; i < groups.length; i++) {
            var g = groups[i]; //最外层组
            if (g.parents && g.parents.length == 0) {
                var stemsGroup = app.activeDocument.layerSets.add();
                var color = getColor(g.layers[0]);
                stemsGroup.name = 'gp' + (i * 100) + color;
                stemsGroup.move(first, ElementPlacement.PLACEBEFORE);
                for (var j = 0; j < g.layers.length; j++) {
                    g.layers[j].move(stemsGroup, ElementPlacement.INSIDE);
                }
                //处理第二层级的组
                if (g.stems) {
                    for (var j = 0; j < g.stems.length; j++) {
                        var gg = g.stems[j];
                        var stemsGroupSub = stemsGroup.layerSets.add();
                        var color = getColor(gg.layers[0]);
                        stemsGroupSub.name = 'gp' + (i * 100 + j + 1) + color;
                        for (var k = 0; k < gg.layers.length; k++) {
                            gg.layers[k].move(stemsGroupSub, ElementPlacement.INSIDE);
                        }
                    }
                }
            }
        }
    }
    groupAll(activeDocument);
    changeLayerName(activeDocument, 999);
}
rename();
