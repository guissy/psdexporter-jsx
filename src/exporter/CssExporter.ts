/// <reference path="../../jsx/omv.d.ts" />
/// <reference path="./Util.ts" />
var CssExporter = function (dialogManager) {

    var _cssTxt;
    var _depth;

    // 初始化
    this.init = function () {
        _cssTxt = "";
        _depth = 0;
    };

    // 输出
    this.export = function (e) {
        // 文件夹
        createDirectoryUtil({path:dialogManager.getCssFolderPath()});
        // 文件打开
        var fileObj:File = new File(getPathInfoCssUtil().fullPath);
        fileObj.open("w");
        fileObj.encoding = dialogManager.getEncodeInfo().system;
        // CSS文本创建（固定部分）
        _cssTxt += "@charset \"" + dialogManager.getEncodeInfo().charset + "\";\n";
        _cssTxt += "\n";
        _cssTxt += "body {\n";
        _cssTxt += "\tbackground-color: #" + dialogManager.getOtherBgColor() + ";\n";
        var infoArr = infoManager.getLayerInfo();
        var length = infoArr.length;
        for (var i = 0; i < length; i++) {
            var info = infoArr[i];
            if (info.type == TYPE_KEY_BG) {
                _cssTxt += "\tbackground-repeat: no-repeat;\n";
                _cssTxt += "\tbackground-image: url(\"" + getPathInfoImagesUtil().folderPathCss + info.name + getExtFromFileTypeUtil({file:info.file}) + "\");\n";
                var left = (info.left == 0) ? 0 : info.left + "px";
                var top = (info.top == 0) ? 0 : info.top + "px";
                _cssTxt += "\tbackground-position: " + left + " " + top + ";" + "\n";
                break;
            }
        }
        _cssTxt += "}\n";
        _cssTxt += "\n";
        _cssTxt += "[id=hide] {display: none;}\n";
        _cssTxt += "img.bg {z-index:-1}\n";
        if (dialogManager.getIsAbsolute()) {
            _cssTxt += "p {\n";
            _cssTxt += "\tpadding: 0;\n";
            _cssTxt += "\tmargin: 0;\n";
            _cssTxt += "}\n";
            _cssTxt += "\n";
        }
        // CSS文本创建（可変部分）
        _export({arr:infoArr});
        // CSS文本创建（固定部分）
        _cssTxt += "\n";
        // 文件写
        fileObj.write(_cssTxt);
        fileObj.close();
    };

    function _export(e) {
        var arr = e.arr;
        // 图层CSS
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            var item = arr[i];
            var index01 = (99 - i) * 100 + 99;
            // CSS文本创建（可変部分）
            if (item.type == TYPE_KEY_NORMAL || item.type == TYPE_KEY_TEXT || item.type == TYPE_KEY_GROUP) {
                _cssTxt += "#" + item.name + " {\n";
                if (dialogManager.getIsAbsolute()) {
                    _cssTxt += "\tposition: absolute;\n";
                    _depth = _depth + 1;
                    var left = (item.left == 0) ? 0 : item.left + "px";
                    var top = (item.top == 0) ? 0 : item.top + "px";
                    _cssTxt += "\ttop: " + top + ";\n";
                    _cssTxt += "\tleft: " + left + ";\n";
                    _cssTxt += "\tz-index: " + index01 +";\n";
                }
                // ボックス
                if (item.type == TYPE_KEY_GROUP) {
                    // 尺寸
                    _cssTxt += "\twidth: " + item.width + "px;\n";
                    _cssTxt += "\theight: " + item.height + "px;\n";
                    // 背景信息取得
                    var _bgTxt = "";
                    var arr2 = arr[item.name];
                    var length2 = arr2.length;
                    for (var j = 0; j < length2; j++) {
                        var item2 = arr2[j];
                        var index02 = index01 - j;
                        if (item2.type == TYPE_KEY_BG) {
                            _bgTxt += "\tbackground-repeat: no-repeat;\n";
                            _bgTxt += "\tbackground-image: url(\"" + getPathInfoImagesUtil().folderPathCss + item2.name + getExtFromFileTypeUtil({file:item2.file}) + "\");\n";
                            if (dialogManager.getIsAbsolute()) {
                                var left = (item2.left == 0) ? 0 : item2.left + "px";
                                var top = (item2.top == 0) ? 0 : item2.top + "px";
                                _bgTxt += "\tbackground-position: " + left + " " + top + ";" + "\n";
                            }
                        }
                        _cssTxt += "\tz-index: " + index02 +";\n";
                    }
                    _cssTxt += _bgTxt;
                }
                // 文本
                if (item.type == TYPE_KEY_TEXT) {
                    // 尺寸
                    if(item.width>0)_cssTxt += "\twidth: " + item.width + "px;\n";
                    if(item.height>0)_cssTxt += "\theight: " + item.height + "px;\n";
                    // 字体信息
                    var fontSize = item.text.size;
                    _cssTxt += "\tfont-size: " + fontSize.replace(/ /, "") + ";\n";
                    var align = null;
                    switch (item.text.align) {
                        case Justification.CENTER:
                            align = "center";
                            break;
                        case Justification.RIGHT:
                            align = "right";
                            break;
                    }
                    if (align) _cssTxt += "\ttext-align: " + align + ";\n";
                    if (item.text.bold)_cssTxt += "\tfont-weight: bold;\n";
                    if (item.text.lineHeight)_cssTxt += "\tline-height: " + item.text.lineHeight + "px;\n";
                    if (item.text.italic)_cssTxt += "\tfont-style: italic;\n";
                    _cssTxt += "\tcolor: " + item.text.color + ";\n";
                }
                // 背景色
                if (item.color) {
                    _cssTxt += "\tbackground-color: #" + item.color + ";\n";
                }
                _cssTxt += "}\n";
                _cssTxt += "\n";
            }
            if (item.type == TYPE_KEY_GROUP) {
                // 递归处理
                _export({arr:arr[item.name]});
            }
        }
    }

};