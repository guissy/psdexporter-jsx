/// <reference path="../../jsx/omv.d.ts" />
var ImageExporter = function (File) {
    // 初始化
    this.init = function () {
    };
    // 输出
    this.export = function (e) {
        // 图片文件夹
        createDirectoryUtil({ path: dialogManager.getImageFolderPath() });
        _hideLayers({
            item: activeDocument
        });
        _export({
            item: activeDocument
        });
        _showLayers({
            item: activeDocument
        });
    };
    // 图层非表示
    function _hideLayers(e) {
        var item = e.item;
        // 图层
        var length = item.artLayers.length;
        for (var i = 0; i < length; i++) {
            var artLayer = item.artLayers[i];
            artLayer.visible = false;
        }
        // 图层组
        var length = item.layerSets.length;
        for (var i = 0; i < length; i++) {
            var layerSet = item.layerSets[i];
            // 递归
            _hideLayers({
                item: layerSet
            });
        }
    }
    // 图层表示
    function _showLayers(e) {
        var item = e.item;
        // 图层
        var length = item.artLayers.length;
        for (var i = 0; i < length; i++) {
            var artLayer = item.artLayers[i];
            artLayer.visible = true;
        }
        // 图层组
        var length = item.layerSets.length;
        for (var i = 0; i < length; i++) {
            var layerSet = item.layerSets[i];
            // 递归
            _showLayers({
                item: layerSet
            });
        }
    }
    // 输出
    function _export(e) {
        var item = e.item;
        // 图层
        var length = item.artLayers.length;
        for (var i = 0; i < length; i++) {
            var artLayer = item.artLayers[i];
            if (artLayer.kind == LayerKind.NORMAL) {
                // 表示
                artLayer.visible = true;
                // 蒙板存在判断
                var hasMask = false;
                if (hasChannelMaskByName(artLayer.name) || hasVectorMaskByName(artLayer.name)) {
                    hasMask = true;
                }
                if (hasMask) {
                    // 图层をアクティブにする
                    activeDocument.activeLayer = artLayer;
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
                    // 选择范围
                    var arr = activeDocument.selection.bounds;
                    var x1 = arr[0];
                    var y1 = arr[1];
                    var x2 = arr[2];
                    var y2 = arr[3];
                    // 新建保存
                    var imageFilePath = getPathInfoImagesUtil().folderPathFull + "/" + "_" + getLayerNameUtil({ name: artLayer.name }) + ".png";
                    var fileObj = new File(imageFilePath);
                    var optionObj_1 = new PNGSaveOptions();
                    optionObj_1.interlaced = false;
                    activeDocument.saveAs(fileObj, optionObj_1, true, Extension.LOWERCASE);
                    // 打开
                    app.open(new File(imageFilePath));
                    // 指定为坐标选择
                    var selReg = [[x1, y1], [x1, y2], [x2, y2], [x2, y1]];
                    activeDocument.selection.select(selReg);
                    // 切り抜き
                    var idCrop = charIDToTypeID("Crop");
                    var desc12 = new ActionDescriptor();
                    var idDlt = charIDToTypeID("Dlt ");
                    desc12.putBoolean(idDlt, true);
                    executeAction(idCrop, desc12, DialogModes.NO);
                }
                else {
                    // 新規保存
                    var imageFilePath = getPathInfoImagesUtil().folderPathFull + "/" + "_" + getLayerNameUtil({ name: artLayer.name }) + ".png";
                    var fileObj = new File(imageFilePath);
                    var optionObj_2 = new PNGSaveOptions();
                    optionObj_2.interlaced = false;
                    activeDocument.saveAs(fileObj, optionObj_2, true, Extension.LOWERCASE);
                    // 開いてトリミング
                    app.open(new File(imageFilePath));
                    activeDocument.trim(TrimType.TRANSPARENT, true, true, true, true);
                    app.preferences.rulerUnits = Units.PIXELS;
                    activeDocument.resizeCanvas(new UnitValue(Math.floor(activeDocument.width.value), 'px'), new UnitValue(Math.floor(activeDocument.height.value), 'px'), AnchorPosition.MIDDLECENTER);
                    activeDocument.resizeCanvas(new UnitValue(activeDocument.width.value, 'px'), new UnitValue(activeDocument.height.value, 'px'), AnchorPosition.TOPLEFT);
                }
                // Web用保存して閉じる
                var optionObj = new ExportOptionsSaveForWeb();
                var color = getLayerColorUtil({ name: artLayer.name });
                if (!color) {
                    color = dialogManager.getOtherBgColor();
                }
                // 颜色蒙板
                optionObj.matteColor = new RGBColor();
                optionObj.matteColor.hexValue = color;
                switch (getFileInfoFromFileNameUtil({ name: artLayer.name }).type) {
                    // PNG保存
                    case FILE_KEY_PNG:
                        optionObj.format = SaveDocumentType.PNG;
                        optionObj.PNG8 = false;
                        optionObj.transparency = true;
                        optionObj.interlaced = false;
                        optionObj.optimized = true;
                        break;
                    // JPEG保存
                    case FILE_KEY_JPG:
                        optionObj.format = SaveDocumentType.JPEG;
                        optionObj.interlaced = false;
                        optionObj.optimized = true;
                        optionObj.quality = dialogManager.getJpegCompressRate();
                        break;
                    // GIF保存
                    case FILE_KEY_GIF:
                        optionObj.format = SaveDocumentType.COMPUSERVEGIF;
                        optionObj.transparency = true;
                        optionObj.colorReduction = ColorReductionType.ADAPTIVE;
                        optionObj.colors = 256;
                        optionObj.dither = Dither.DIFFUSION; // 抖动的种类
                        optionObj.ditherAmount = 100; // 抖动的比例
                        break;
                }
                var imageFilePath = getPathInfoImagesUtil().folderPathFull + "/" + getLayerNameUtil({ name: artLayer.name }) + getFileInfoFromFileNameUtil({ name: artLayer.name }).ext;
                var fileObj = new File(imageFilePath);
                activeDocument.exportDocument(fileObj, ExportType.SAVEFORWEB, optionObj);
                // Non-standard extensions
                activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                // 删除无用语句
                var imageFilePath = getPathInfoImagesUtil().folderPathFull + "/" + "_" + getLayerNameUtil({ name: artLayer.name }) + ".png";
                var fileObj = new File(imageFilePath);
                fileObj.remove();
                artLayer.visible = false;
            }
        }
        // 图层组
        var length = item.layerSets.length;
        for (var i = 0; i < length; i++) {
            var layerSet = item.layerSets[i];
            // 递归
            _export({
                item: layerSet
            });
        }
    }
};
