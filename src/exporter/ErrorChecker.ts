/// <reference path="../../jsx/omv.d.ts" />
var ErrorChecker = function () {

    var _errorMsgSave;
    var _errorMsgDuplicate;
    var _errorMsgName;
    var _errorMsgExist;

    var _layerName;

    // 初始化
    this.init = function () {
        _errorMsgSave = "";
        _errorMsgDuplicate = "";
        _errorMsgName = "";
        _errorMsgExist = "";
        _layerName = "";
    };

    // 检测
    this.check = function (e) {
        _checkSave();
        _checkDuplicate({
            item:activeDocument,
            name:""
        });
        _checkName({
            item:activeDocument,
            name:""
        });
        _checkExist({
            item:activeDocument,
            name:""
        });
        var msg = "";
        if (_errorMsgSave != "" || _errorMsgDuplicate != "" || _errorMsgName != "" || _errorMsgExist != "") {
            msg = "发生以下错误: \n\n";
            if (_errorMsgSave != "") msg += _errorMsgSave;
            if (_errorMsgDuplicate != "") msg += "■ 图层及图层集的名称上存在重复。\n\n" + _errorMsgDuplicate;
            if (_errorMsgName != "") msg += "■ 图层及图层组的名称上存在的双字节文字。\n\n" + _errorMsgName;
            if (_errorMsgExist != "") msg += "■ 在显示范围内存在无像素的图层及图层组。\n\n" + _errorMsgExist;
        }
        if (msg != "") {
            alert(msg);
            startExportEvent();
        } else {
            // 开始导出
            startExportEvent();
        }
    };

    // 保存检测
    function _checkSave() {
        if (!activeDocument || !activeDocument.path) {
            _errorMsgSave += "■ 必须先打开一个PSD文件。\n\n";
        }
        var fileName = String(activeDocument.fullName);
        fileName = fileName.substring(fileName.lastIndexOf("/") + 1, fileName.length);
        if (fileName.match(/[^0-9A-Za-z_.:-]+/) != null) {
            _errorMsgSave += "■ PSD文件名必须为半角的英文数字。\n\n";
        }
    }

    // 重复检测
    function _checkDuplicate(e) {
        var item = e.item;
        var name = e.name;
        // 图层
        var length = item.artLayers.length;
        for (var i = 0; i < length; i++) {
            var artLayer = item.artLayers[ i ];
            var layerName = getLayerNameUtil({name:artLayer.name});
            if (_layerName == layerName) {
                _errorMsgDuplicate += "	图层 :  " + name + "/" + artLayer.name + "\n\n";
            }
            _layerName += layerName + "@";
        }
        // 图层组
        var length = item.layerSets.length;
        for (var i = 0; i < length; i++) {
            var layerSet = item.layerSets[ i ];
            var layerName = getLayerNameUtil({name:layerSet.name});
            if (_layerName == layerName) {
                _errorMsgDuplicate += "	图层组 : " + name + "/" + layerSet.name + "\n\n";
            }
            _layerName += layerName + "@";
            // 递归
            _checkDuplicate({
                item:layerSet,
                name:name + "/" + layerSet.name
            });
        }
    }

    // ID检测
    function _checkName(e) {
        var item = e.item;
        var name = e.name;
        // 图层
        var length = item.artLayers.length;
        for (var i = 0; i < length; i++) {
            var artLayer = item.artLayers[ i ];
            var layerName = getLayerNameUtil({name:artLayer.name});
            if (layerName.match(/[^0-9A-Za-z_.:-]+/) != null) {
                _errorMsgName += "	图层 :  " + name + "/" + artLayer.name + "\n\n";
            }
        }
        // 图层组
        var length = item.layerSets.length;
        for (var i = 0; i < length; i++) {
            var layerSet = item.layerSets[ i ];
            var layerName = getLayerNameUtil({name:layerSet.name});
            if (layerName.match(/[^0-9A-Za-z_.:-]+/) != null) {
                _errorMsgName += "	图层组 : " + name + "/" + layerSet.name + "\n\n";
            }
            // 递归
            _checkName({
                item:layerSet,
                name:name + "/" + layerSet.name
            });
        }
    }

    // 可见像素检测
    function _checkExist(e) {
        var item = e.item;
        var name = e.name;
        var documentHeight = activeDocument.height.value;
        var documentWidth = activeDocument.width.value;
        // 图层
        var length = item.artLayers.length;
        for (var i = 0; i < length; i++) {
            var artLayer = item.artLayers[ i ];
            var x1 = artLayer.bounds[0].value;
            var y1 = artLayer.bounds[1].value;
            var x2 = artLayer.bounds[2].value;
            var y2 = artLayer.bounds[3].value;
            if (( x2 - x1 ) <= 0 || ( y2 - y1 ) <= 0 || x2 <= 0 || y2 <= 0 || documentWidth <= x1 || documentHeight <= y1) {
                // 在显示范围内存在无像素的图层及图层组。
                _errorMsgExist += "	图层 :  " + name + "/" + artLayer.name + "\n\n";
            }
        }
        // 图层组
        var length = item.layerSets.length;
        for (var i = 0; i < length; i++) {
            var layerSet = item.layerSets[ i ];
            // 可见像素检测
            if (layerSet.artLayers.length <= 0 && layerSet.layerSets.length <= 0) {
                _errorMsgExist += "	图层组 : " + name + "/" + layerSet.name + "\n\n";
            }
            // 递归
            _checkExist({
                item:layerSet,
                name:name + "/" + layerSet.name
            });
        }
    }

};