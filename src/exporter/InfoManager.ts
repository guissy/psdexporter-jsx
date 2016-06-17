/// <reference path="../../jsx/omv.d.ts" />
var InfoManager = function () {

    var _layerInfoArr;

    // 初始化
    this.init = function () {
        _layerInfoArr = [];
    };

    // 提取
    this.extract = function (e) {
        _extract({
            item: activeDocument,
            infoArr: _layerInfoArr,
            top: 0,
            left: 0
        });
    };

    // 图层信息取得
    this.getLayerInfo = function () {
        return _layerInfoArr;
    };

    // 提取
    function _extract(e) {
        var item = e.item;
        var infoArr = e.infoArr;
        var left = e.left;
        var top = e.top;
        var length = item.layers.length;
        for (var i = 0; i < length; i++) {
            var layer = item.layers[i];
            var layoutInfoObj = null;
            var totalInfoObj = null;
            var layerName = getLayerNameUtil({name: layer.name});
            if (layer.kind == LayerKind.NORMAL) {
                if (String(layer.name).charAt(0) == OPTION_KEY_BGIMAGE) {
                    // 背景图层
                    layoutInfoObj = _getLayoutInfo({item: layer});
                    totalInfoObj = {
                        type: TYPE_KEY_BG,
                        name: layerName,
                        top: layoutInfoObj.top - top,
                        left: layoutInfoObj.left - left,
                        width: layoutInfoObj.width,
                        height: layoutInfoObj.height,
                        file: getFileInfoFromFileNameUtil({name: layer.name}).type,
                        text: null,
                        alt: "",
                        color: getLayerColorUtil({name: layer.name})
                    };
                    infoArr.push(totalInfoObj);
                } else {
                    // 通常图层
                    layoutInfoObj = _getLayoutInfo({item: layer});
                    totalInfoObj = {
                        type: TYPE_KEY_NORMAL,
                        name: layerName,
                        top: layoutInfoObj.top - top,
                        left: layoutInfoObj.left - left,
                        width: layoutInfoObj.width,
                        height: layoutInfoObj.height,
                        file: getFileInfoFromFileNameUtil({name: layer.name}).type,
                        text: null,
                        alt: getLayerAltUtil({name: layer.name}),
                        color: getLayerColorUtil({name: layer.name})
                    };
                    infoArr.push(totalInfoObj);
                }
            } else if (layer.kind == LayerKind.TEXT) {
                // 文本图层
                layoutInfoObj = _getLayoutInfo({item: layer});
                var size = "";
                var align = null;
                var color = null;
                var bold = false;
                var italic = false;
                try {
                    if (layer.textItem.size) {
                        size = String(layer.textItem.size).replace(" pt", "px");
                    }
                } catch (e) {
                }

                var lineHeight = 0;
                try {
                    lineHeight = layer.textItem.leading.value;
                }
                catch (e) {
                   
                }
                try {
                    if (layer.textItem.justification) {
                        align = layer.textItem.justification;
                    }
                } catch (e) {
                }
                try {
                    if (layer.textItem.color.rgb.hexValue) {
                        color = "#" + layer.textItem.color.rgb.hexValue;
                    }
                } catch (e) {
                }
                try {
                    if (layer.textItem.fauxBold) {
                        bold = layer.textItem.fauxBold;
                    }
                } catch (e) {
                }
                try {
                    if (layer.textItem.fauxItalic) {
                        italic = layer.textItem.fauxItalic;
                    }
                } catch (e) {
                }
                var lineHeightTop = (lineHeight - parseInt(size)) / 2;
                if (!(lineHeightTop > 0)) lineHeightTop = 0;
                totalInfoObj = {
                    type: TYPE_KEY_TEXT,
                    name: layerName,
                    top: layoutInfoObj.top - top - lineHeightTop,
                    left: layoutInfoObj.left - left,
                    width: 'auto',
                    height: lineHeight,
                    file: null,
                    text: {
                        contents: layer.textItem.contents,
                        size: size,
                        align: align,
                        color: color,
                        lineHeight: lineHeight,
                        bold: bold,
                        italic: italic
                    },
                    alt: "",
                    color: getLayerColorUtil({name: layer.name})
                };
                infoArr.push(totalInfoObj);
            } else if (layer.kind == undefined) {
                // 图层组
                layoutInfoObj = _getLayoutInfo({item: layer});
                totalInfoObj = {
                    type: TYPE_KEY_GROUP,
                    name: layerName,
                    top: layoutInfoObj.top - top,
                    left: layoutInfoObj.left - left,
                    width: layoutInfoObj.width,
                    height: layoutInfoObj.height,
                    file: null,
                    text: null,
                    alt: "",
                    color: getLayerColorUtil({name: layer.name})
                };
                infoArr.push(totalInfoObj);
                infoArr[layerName] = [];
                // 递归
                _extract({
                    item: layer,
                    infoArr: infoArr[layerName],
                    top: layoutInfoObj.top,
                    left: layoutInfoObj.left
                });
            }
        }
    }

    // 格式信息を取得
    function _getLayoutInfo(e) {
        var item = e.item;
        // 蒙板存在判断
        if (hasChannelMaskByName(item.name) || hasVectorMaskByName(item.name)) {
            // 图层をアクティブにする
            activeDocument.activeLayer = item;
            // マスクを選択
            var idslct = charIDToTypeID("slct");
            var desc78 = new ActionDescriptor();
            var idnull = charIDToTypeID("null");
            var ref49 = new ActionReference();
            var idChnl = charIDToTypeID("Chnl");
            var idChnl = charIDToTypeID("Chnl");
            var idMsk = charIDToTypeID("Msk ");
            ref49.putEnumerated(idChnl, idChnl, idMsk);
            desc78.putReference(idnull, ref49);
            var idMkVs = charIDToTypeID("MkVs");
            desc78.putBoolean(idMkVs, false);
            executeAction(idslct, desc78, DialogModes.NO);
            // マスクの範囲を選択
            var idsetd = charIDToTypeID("setd");
            var desc79 = new ActionDescriptor();
            var idnull = charIDToTypeID("null");
            var ref50 = new ActionReference();
            var idChnl = charIDToTypeID("Chnl");
            var idfsel = charIDToTypeID("fsel");
            ref50.putProperty(idChnl, idfsel);
            desc79.putReference(idnull, ref50);
            var idT = charIDToTypeID("T   ");
            var ref51 = new ActionReference();
            var idChnl = charIDToTypeID("Chnl");
            var idOrdn = charIDToTypeID("Ordn");
            var idTrgt = charIDToTypeID("Trgt");
            ref51.putEnumerated(idChnl, idOrdn, idTrgt);
            desc79.putReference(idT, ref51);
            executeAction(idsetd, desc79, DialogModes.NO);
            // 选择选择范围
            var arr = activeDocument.selection.bounds;
            var x1 = arr[0].value;
            var y1 = arr[1].value;
            var x2 = arr[2].value;
            var y2 = arr[3].value;
        } else {
            var bounds = item.bounds;
            var x1 = bounds[0].value;
            var y1 = bounds[1].value;
            var x2 = bounds[2].value;
            var y2 = bounds[3].value;
        }
        var top = y1;
        if (top < 0) top = 0;
        var left = x1;
        if (left < 0) left = 0;
        var width = x2 - x1;
        if (width < 0) width = 0;
        var height = y2 - y1;
        if (height < 0) height = 0;
        return {
            top: top,
            left: left,
            width: width,
            height: height
        };
    }

    function _traceInfoArr(e) {
        var arr = e.arr;
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            alert(arr[i].name);
            if (arr[i].type == TYPE_KEY_GROUP) {
                // 递归处理
                _traceInfoArr({arr: arr[arr[i].name]});
            }
        }
    }

};