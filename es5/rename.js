/// <reference path="../../jsx/omv.d.ts" />
var kkk = 999;
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
                    var x1 = bounds[0].value;
                    var y1 = bounds[1].value;
                    var x2 = bounds[2].value;
                    var y2 = bounds[3].value;
                    //假设为背景
                    if (y2 - y1 > 40 && x2 - x1 > 100 || y2 - y1 > 100 && x2 - x1 > 40) {
                        //取得背景色
                        var c = getLayerColor(item);
                        item.name = "bgc_" + j + "_" + c; //+getLayerColor(item);
                    }
                    else if (y2 - y1 < 3 || x2 - x1 < 3) {
                        item.name = "line_" + j + getLayerColor(item);
                    }
                    else {
                        //图片,栅格化
                        item.rasterize(RasterizeType.ENTIRELAYER);
                        item.name = "block_" + j + ".png@" + 'zlg';
                    }
                }
                else if (item.kind == LayerKind.TEXT) {
                    item.name = "txt_" + j;
                }
                else if (item.grouped == true) {
                    //处理clipping mask
                    setSelectedLayers([getLayerIndexByID(item.id), getLayerIndexByID(layers[i + 1].id)]);
                    item.name = "block_" + j + ".png@" + 'zlg';
                    item.merge();
                }
                else if (item.name == '图层 1') {
                    item.name = "*bg_" + j + getLayerColor(item);
                }
                else if (item.name.indexOf('矩形') == 0) {
                    //某些栅格化的图形?
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
groupAll(app.activeDocument);
changeLayerName(app.activeDocument, 999);
app.activeDocument.layerComps.add('成组并重命名', '', true, true, true);
