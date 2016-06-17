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
        createDirectoryUtil({ path: dialogManager.getCssFolderPath() });
        // 文件打开
        var fileObj = new File(getPathInfoCssUtil().fullPath);
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
                _cssTxt += "\tbackground-image: url(\"" + getPathInfoImagesUtil().folderPathCss + info.name + getExtFromFileTypeUtil({ file: info.file }) + "\");\n";
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
        _export({ arr: infoArr });
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
                    _cssTxt += "\tz-index: " + index01 + ";\n";
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
                            _bgTxt += "\tbackground-image: url(\"" + getPathInfoImagesUtil().folderPathCss + item2.name + getExtFromFileTypeUtil({ file: item2.file }) + "\");\n";
                            if (dialogManager.getIsAbsolute()) {
                                var left = (item2.left == 0) ? 0 : item2.left + "px";
                                var top = (item2.top == 0) ? 0 : item2.top + "px";
                                _bgTxt += "\tbackground-position: " + left + " " + top + ";" + "\n";
                            }
                        }
                        _cssTxt += "\tz-index: " + index02 + ";\n";
                    }
                    _cssTxt += _bgTxt;
                }
                // 文本
                if (item.type == TYPE_KEY_TEXT) {
                    // 尺寸
                    if (item.width > 0)
                        _cssTxt += "\twidth: " + item.width + "px;\n";
                    if (item.height > 0)
                        _cssTxt += "\theight: " + item.height + "px;\n";
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
                    if (align)
                        _cssTxt += "\ttext-align: " + align + ";\n";
                    if (item.text.bold)
                        _cssTxt += "\tfont-weight: bold;\n";
                    if (item.text.lineHeight)
                        _cssTxt += "\tline-height: " + item.text.lineHeight + "px;\n";
                    if (item.text.italic)
                        _cssTxt += "\tfont-style: italic;\n";
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
                _export({ arr: arr[item.name] });
            }
        }
    }
};

/// <reference path="../../jsx/omv.d.ts" />
/// <reference path="./Util.ts" />
var DialogManager = function () {
    var _window;
    var _imageEdittextDirectory;
    var _htmlEdittextDirectory;
    var _htmlEdittextName;
    var _htmlDropdownlistDoctype;
    var _cssEdittextDirectory;
    var _cssEdittextName;
    var _cssCheckboxLayout;
    var _otherRadiobuttonAbsolute;
    var _otherEdittextColor;
    var _okBtn;
    var _cancelBtn;
    var _isExportImages = true;
    var _isExportHtml = true;
    var _isExportCss = true;
    var _imageFolderPath = null;
    var _htmlFolderPath = null;
    var _cssFolderPath = null;
    var _htmlFileName = null;
    var _cssFileName = null;
    var _otherBgColor = null;
    var _encodeInfo = null;
    var _jpegCompressRate = null;
    var _htmlDoctype = null;
    var _htmlTitle = null;
    var _htmlEdittextTitle = null;
    var _defaultFileType = null;
    var _isAbsolute = true;
    var _rootPathFromHtml = "";
    var _rootPathFromCss = "";
    var _isRelativePath = true;
    // 初始化
    this.init = function () {
        var totalY = 0;
        // 窗口创建
        _window = new Window("dialog", "HTML一键切图 v0.2", _getPosition({ x: 200, y: 200, w: 390, h: 500 }));
        // 图像文件设置
        totalY = 0;
        var imagePanel = _window.add("panel", _getPosition({ x: 20, y: totalY + 5, w: 350, h: 55 }), "图像文件设置");
        imagePanel.add("statictext", _getPosition({ x: 20, y: 10, w: 100, h: 20 }), "目录 :").justify = "right";
        _imageEdittextDirectory = imagePanel.add("edittext", _getPosition({ x: 130, y: 10, w: 200, h: 20 }), "images");
        // HTML文件设置
        totalY = 35;
        var htmlPanel = _window.add("panel", _getPosition({ x: 20, y: totalY + 40, w: 350, h: 150 }), "HTML文件设置");
        htmlPanel.add("statictext", _getPosition({ x: 20, y: 10, w: 100, h: 20 }), "目录 :").justify = "right";
        _htmlEdittextDirectory = htmlPanel.add("edittext", _getPosition({ x: 130, y: 10, w: 200, h: 20 }), "");
        htmlPanel.add("statictext", _getPosition({ x: 20, y: 40, w: 100, h: 20 }), "文件名 :").justify = "right";
        _htmlEdittextName = htmlPanel.add("edittext", _getPosition({ x: 130, y: 40, w: 200, h: 20 }), "index.html");
        // htmlPanel.add("statictext", _getPosition({x:20, y:80, w:100, h:20}), "文档形式 :").justify = "right";
        _htmlDropdownlistDoctype = htmlPanel.add("dropdownlist", _getPosition({ x: 130, y: 70, w: 200, h: 20 }), ["HTML5", "Jade", "XHTML 1.0 Transitional", "HTML 4.01 Transitional"]);
        _htmlDropdownlistDoctype.selection = 0;
        htmlPanel.add("statictext", _getPosition({ x: 20, y: 100, w: 100, h: 20 }), "页面标题 :").justify = "right";
        _htmlEdittextTitle = htmlPanel.add("edittext", _getPosition({ x: 130, y: 100, w: 200, h: 20 }), "Photoshop文档");
        // CSS文件设置
        totalY = 195;
        var _cssPanel = _window.add("panel", _getPosition({ x: 20, y: totalY + 40, w: 350, h: 130 }), "CSS文件设置");
        _cssPanel.add("statictext", _getPosition({ x: 20, y: 20, w: 100, h: 20 }), "目录 :").justify = "right";
        _cssEdittextDirectory = _cssPanel.add("edittext", _getPosition({ x: 130, y: 20, w: 200, h: 20 }), "css");
        _cssPanel.add("statictext", _getPosition({ x: 20, y: 50, w: 100, h: 20 }), "文件名 :").justify = "right";
        _cssEdittextName = _cssPanel.add("edittext", _getPosition({ x: 130, y: 50, w: 200, h: 20 }), "index.css");
        _cssPanel.add("statictext", _getPosition({ x: 20, y: 80, w: 100, h: 20 }), "格式 :").justify = "right";
        _cssCheckboxLayout = _cssPanel.add("checkbox", _getPosition({ x: 130, y: 80, w: 200, h: 20 }), "absolute写入信息");
        _cssCheckboxLayout.value = true;
        // 其他选项
        totalY = 380;
        _window.add("statictext", _getPosition({ x: 20, y: totalY, w: 90, h: 20 }), "背景色 :").justify = "right";
        _otherEdittextColor = _window.add("edittext", _getPosition({ x: 120, y: totalY, w: 200, h: 20 }), "#ffffff");
        _window.add("statictext", _getPosition({ x: 20, y: totalY + 30, w: 90, h: 20 }), "定位方式 :").justify = "right";
        var _otherRadiobuttonRelative = _window.add("radiobutton", _getPosition({ x: 120, y: totalY + 30, w: 80, h: 20 }), "相对定位");
        _otherRadiobuttonRelative.value = true;
        _otherRadiobuttonAbsolute = _window.add("radiobutton", _getPosition({ x: 200, y: totalY + 30, w: 80, h: 20 }), "绝对定位");
        _otherRadiobuttonAbsolute.value = false;
        // OK按钮
        totalY = 445;
        _okBtn = _window.add("button", _getPosition({ x: 90, y: totalY, w: 100, h: 30 }), "OK", { name: "ok" });
        _okBtn.onClick = function () {
            _close({ flg: true });
        };
        // CANCEL按钮
        _cancelBtn = _window.add("button", _getPosition({ x: 200, y: totalY, w: 100, h: 30 }), "Cancel", { name: "cancel" });
        _cancelBtn.onClick = function () {
            _close({ flg: false });
        };
        // 版权
        _window.add("statictext", _getPosition({ x: 20, y: totalY + 30, w: 350, h: 20 }), "Developed : @knockknockjp").justify = "right";
    };
    // 打开
    this.open = function () {
        _window.show();
    };
    // 图像文件输出か否か
    this.getIsExportImages = function () {
        return _isExportImages;
    };
    // HTML文件输出
    this.getIsExportHtml = function () {
        return _isExportHtml;
    };
    // HTML文件输出
    this.getIsExportCss = function () {
        return _isExportCss;
    };
    // 图像文件存储位置
    this.getImageFolderPath = function () {
        return _imageFolderPath;
    };
    // HTML文件存储位置
    this.getHtmlFolderPath = function () {
        return _htmlFolderPath;
    };
    // CSS文件存储位置
    this.getCssFolderPath = function () {
        return _cssFolderPath;
    };
    // HTML文件名
    this.getHtmlFileName = function () {
        return _htmlFileName;
    };
    // CSS文件名
    this.getCssFileName = function () {
        return _cssFileName;
    };
    // エン编码
    this.getEncodeInfo = function () {
        return _encodeInfo;
    };
    // JPEG圧縮率
    this.getJpegCompressRate = function () {
        return _jpegCompressRate;
    };
    // HTML文档形式
    this.getHtmlDoctype = function () {
        return _htmlDoctype;
    };
    // HTML标题
    this.getHtmlTitle = function () {
        return _htmlTitle;
    };
    // 默认图片格式
    this.getDefaultFileType = function () {
        return _defaultFileType;
    };
    // 背景カラー
    this.getOtherBgColor = function () {
        return _otherBgColor;
    };
    // 绝对配置
    this.getIsAbsolute = function () {
        return _isAbsolute;
    };
    // HTML文件
    this.getRootPathFromHtml = function () {
        return _rootPathFromHtml;
    };
    // CSS文件
    this.getRootPathFromCss = function () {
        return _rootPathFromCss;
    };
    // 绝对定位か否か
    this.getIsRelativePath = function () {
        return _isRelativePath;
    };
    // 閉じる
    function _close(e) {
        if (e.flg) {
            var str = "";
            var selection = "";
            // 图像文件输出判断
            _isExportImages = true; //_imageCheckboxExport.value;
            // HTML文件输出判断
            _isExportHtml = true; //_htmlCheckboxExport.value;
            // HTML文件输出判断
            _isExportCss = true; //_cssCheckboxExport.value;
            // 图像文件存储位置
            _imageFolderPath = _setDirectoryText({ str: _imageEdittextDirectory.text });
            // HTML文件存储位置
            _htmlFolderPath = _setDirectoryText({ str: _htmlEdittextDirectory.text });
            // CSS文件存储位置
            _cssFolderPath = _setDirectoryText({ str: _cssEdittextDirectory.text });
            // HTML文件名
            _htmlFileName = _setFileNameText({ str: _htmlEdittextName.text });
            // CSS文件名
            _cssFileName = _setFileNameText({ str: _cssEdittextName.text });
            // 背景色
            _otherBgColor = getHexColorTextUtil(_otherEdittextColor.text);
            // 编码
            _encodeInfo = {
                system: "UTF8",
                charset: "utf-8"
            };
            // JPEG圧縮率
            _jpegCompressRate = 80;
            // HTML文档形式
            _htmlDoctype = HTML_KEY_HTML5;
            selection = String(_htmlDropdownlistDoctype.selection);
            switch (selection) {
                case "HTML5":
                    _htmlDoctype = HTML_KEY_HTML5;
                    break;
                case "Jade":
                    _htmlDoctype = HTML_KEY_JADE;
                    break;
                case "XHTML 1.0 Transitional":
                    _htmlDoctype = HTML_KEY_XHTML;
                    break;
                case "HTML 4.01 Transitional":
                    _htmlDoctype = HTML_KEY_HTML4;
                    break;
            }
            // HTML标题
            _htmlTitle = _htmlEdittextTitle.text;
            // 默认图片格式
            _defaultFileType = FILE_KEY_PNG;
            // 绝对配置
            _isAbsolute = _cssCheckboxLayout.value;
            // 绝对定位相对定位
            _isRelativePath = true;
            if (_otherRadiobuttonAbsolute.value == true) {
                _isRelativePath = false;
            }
            // HTML根目录定位
            _rootPathFromHtml = _getRootPath({ path: _htmlFolderPath });
            // CSS根目录定位
            _rootPathFromCss = _getRootPath({ path: _cssFolderPath });
            _window.close();
            // 错误检验事件
            checkErrorEvent();
        }
        else {
            _window.close();
            alert("已取消");
        }
    }
    // 项目位置信息取得
    function _getPosition(e) {
        return [e.x, e.y, e.w + e.x, e.h + e.y];
    }
    // 目录文本创建
    function _setDirectoryText(e) {
        var str = String(e.str);
        var str2 = "";
        var flg = false;
        var flg2 = false;
        var length = str.length;
        for (var i = 0; i < length; i++) {
            if (!flg && String(str[i]).match(/[^0-9A-Za-z_-]+/) == null) {
                flg = true;
            }
            if (flg && String(str[i]).match(/[^0-9A-Za-z_.\/-]+/) == null) {
                if (String(str[i]).match(/[^\/]+/) == null) {
                    if (flg2) {
                        return str2.substr(0, str2.length - 1);
                    }
                    else {
                        str2 += str[i];
                    }
                    flg2 = true;
                }
                else {
                    str2 += str[i];
                    flg2 = false;
                }
            }
        }
        if (str2.charAt(str2.length - 1) == "/") {
            str2 = str2.substr(0, str2.length - 1);
        }
        return str2;
    }
    // 文件名文本创建
    function _setFileNameText(e) {
        var str = String(e.str);
        var str2 = "";
        var flg = false;
        var length = str.length;
        for (var i = 0; i < length; i++) {
            if (!flg && String(str[i]).match(/[^0-9A-Za-z_-]+/) == null) {
                flg = true;
            }
            if (flg && String(str[i]).match(/[^0-9A-Za-z_.-]+/) == null) {
                str2 += str[i];
            }
        }
        if (str2.charAt(0) == ".") {
            str2 = str2.slice(1);
        }
        str2 = str2.split(".")[0];
        return str2;
    }
    // 路径定位取得
    function _getRootPath(e) {
        if (dialogManager.getIsRelativePath()) {
            var path = e.path;
            var depth = 0;
            if (path != "") {
                depth = String(path).split("/").length;
            }
            var str = "";
            var length = depth;
            for (var i = 0; i < length; i++) {
                str += "../";
            }
        }
        else {
            str = "/";
        }
        return str;
    }
};

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
            item: activeDocument,
            name: ""
        });
        _checkName({
            item: activeDocument,
            name: ""
        });
        _checkExist({
            item: activeDocument,
            name: ""
        });
        var msg = "";
        if (_errorMsgSave != "" || _errorMsgDuplicate != "" || _errorMsgName != "" || _errorMsgExist != "") {
            msg = "发生以下错误: \n\n";
            if (_errorMsgSave != "")
                msg += _errorMsgSave;
            if (_errorMsgDuplicate != "")
                msg += "■ 图层及图层集的名称上存在重复。\n\n" + _errorMsgDuplicate;
            if (_errorMsgName != "")
                msg += "■ 图层及图层组的名称上存在的双字节文字。\n\n" + _errorMsgName;
            if (_errorMsgExist != "")
                msg += "■ 在显示范围内存在无像素的图层及图层组。\n\n" + _errorMsgExist;
        }
        if (msg != "") {
            alert(msg);
            startExportEvent();
        }
        else {
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
            var artLayer = item.artLayers[i];
            var layerName = getLayerNameUtil({ name: artLayer.name });
            if (_layerName == layerName) {
                _errorMsgDuplicate += "	图层 :  " + name + "/" + artLayer.name + "\n\n";
            }
            _layerName += layerName + "@";
        }
        // 图层组
        var length = item.layerSets.length;
        for (var i = 0; i < length; i++) {
            var layerSet = item.layerSets[i];
            var layerName = getLayerNameUtil({ name: layerSet.name });
            if (_layerName == layerName) {
                _errorMsgDuplicate += "	图层组 : " + name + "/" + layerSet.name + "\n\n";
            }
            _layerName += layerName + "@";
            // 递归
            _checkDuplicate({
                item: layerSet,
                name: name + "/" + layerSet.name
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
            var artLayer = item.artLayers[i];
            var layerName = getLayerNameUtil({ name: artLayer.name });
            if (layerName.match(/[^0-9A-Za-z_.:-]+/) != null) {
                _errorMsgName += "	图层 :  " + name + "/" + artLayer.name + "\n\n";
            }
        }
        // 图层组
        var length = item.layerSets.length;
        for (var i = 0; i < length; i++) {
            var layerSet = item.layerSets[i];
            var layerName = getLayerNameUtil({ name: layerSet.name });
            if (layerName.match(/[^0-9A-Za-z_.:-]+/) != null) {
                _errorMsgName += "	图层组 : " + name + "/" + layerSet.name + "\n\n";
            }
            // 递归
            _checkName({
                item: layerSet,
                name: name + "/" + layerSet.name
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
            var artLayer = item.artLayers[i];
            var x1 = artLayer.bounds[0].value;
            var y1 = artLayer.bounds[1].value;
            var x2 = artLayer.bounds[2].value;
            var y2 = artLayer.bounds[3].value;
            if ((x2 - x1) <= 0 || (y2 - y1) <= 0 || x2 <= 0 || y2 <= 0 || documentWidth <= x1 || documentHeight <= y1) {
                // 在显示范围内存在无像素的图层及图层组。
                _errorMsgExist += "	图层 :  " + name + "/" + artLayer.name + "\n\n";
            }
        }
        // 图层组
        var length = item.layerSets.length;
        for (var i = 0; i < length; i++) {
            var layerSet = item.layerSets[i];
            // 可见像素检测
            if (layerSet.artLayers.length <= 0 && layerSet.layerSets.length <= 0) {
                _errorMsgExist += "	图层组 : " + name + "/" + layerSet.name + "\n\n";
            }
            // 递归
            _checkExist({
                item: layerSet,
                name: name + "/" + layerSet.name
            });
        }
    }
};

/// <reference path="../../jsx/omv.d.ts" />
var HtmlExporter = function (File) {
    var _htmlTxt;
    // 初始化
    this.init = function () {
        _htmlTxt = "";
    };
    // 输出
    this.export = function (e) {
        // 文件夹
        createDirectoryUtil({ path: dialogManager.getHtmlFolderPath() });
        // 文件打开
        var fileObj = new File(getPathInfoHtmlUtil().fullPath);
        fileObj.open("w");
        switch (dialogManager.getHtmlDoctype()) {
            case HTML_KEY_HTML4:
                _htmlTxt += "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n";
                _htmlTxt += "<html>\n";
                break;
            case HTML_KEY_XHTML:
                _htmlTxt += "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n";
                _htmlTxt += "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n";
                break;
            case HTML_KEY_HTML5:
                _htmlTxt += "<!DOCTYPE HTML>\n";
                _htmlTxt += "<html>\n";
                break;
            case HTML_KEY_JADE:
                _htmlTxt += "doctype html\n";
                _htmlTxt += "html(lang=\"ja\")\n";
                break;
        }
        fileObj.encoding = dialogManager.getEncodeInfo().system;
        // HTML文本创建（固定部分）
        switch (dialogManager.getHtmlDoctype()) {
            case HTML_KEY_HTML4:
                _htmlTxt += INDENT_VALUE + "<head>\n";
                _htmlTxt += INDENT_VALUE + INDENT_VALUE + "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=" + dialogManager.getEncodeInfo().charset + "\">\n";
                break;
            case HTML_KEY_XHTML:
                _htmlTxt += INDENT_VALUE + "<head>\n";
                _htmlTxt += INDENT_VALUE + INDENT_VALUE + "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=" + dialogManager.getEncodeInfo().charset + "\" />\n";
                break;
            case HTML_KEY_HTML5:
                _htmlTxt += INDENT_VALUE + "<head>\n";
                _htmlTxt += INDENT_VALUE + INDENT_VALUE + "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=" + dialogManager.getEncodeInfo().charset + "\">\n";
                _htmlTxt += INDENT_VALUE + INDENT_VALUE + "<meta name=\"viewport\" content=\"width=" + activeDocument.width.value + ", user-scalable=yes, maximum-scale=3.0, minimum-scale=0\">\n";
                break;
            case HTML_KEY_JADE:
                _htmlTxt += INDENT_VALUE + "head\n";
                _htmlTxt += INDENT_VALUE + INDENT_VALUE + "meta(http-equiv=\"Content-Type\", content=\"text/html; charset=" + dialogManager.getEncodeInfo().charset + "\")\n";
                break;
        }
        if (dialogManager.getHtmlDoctype() != HTML_KEY_JADE) {
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + "<title>" + dialogManager.getHtmlTitle() + "</title>\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + "<style type=\"text/css\">\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "body,td,th {\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "color: #000;\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "}\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "body {\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "background-color: #" + dialogManager.getOtherBgColor() + ";\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "margin-left: 0;\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "margin-top: 0;\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "margin-right: 0;\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "margin-bottom: 0;\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "}\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + "</style>\n";
        }
        else {
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + "title " + dialogManager.getHtmlTitle() + "\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + "style.\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "body,td,th {\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "color: #000;\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "}\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "body {\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "background-color: #" + dialogManager.getOtherBgColor() + ";\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "margin-left: 0;\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "margin-top: 0;\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "margin-right: 0;\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "margin-bottom: 0;\n";
            _htmlTxt += INDENT_VALUE + INDENT_VALUE + INDENT_VALUE + "}\n";
        }
        if (dialogManager.getIsExportCss()) {
            switch (dialogManager.getHtmlDoctype()) {
                case HTML_KEY_HTML4:
                    _htmlTxt += INDENT_VALUE + INDENT_VALUE + "<link href=\"" + getPathInfoCssUtil().srcPath + "\" rel=\"stylesheet\" type=\"text/css\">\n";
                    break;
                case HTML_KEY_XHTML:
                    _htmlTxt += INDENT_VALUE + INDENT_VALUE + "<link href=\"" + getPathInfoCssUtil().srcPath + "\" rel=\"stylesheet\" type=\"text/css\" />\n";
                    break;
                case HTML_KEY_HTML5:
                    _htmlTxt += INDENT_VALUE + INDENT_VALUE + "<link href=\"" + getPathInfoCssUtil().srcPath + "\" rel=\"stylesheet\" type=\"text/css\">\n";
                    break;
                case HTML_KEY_JADE:
                    _htmlTxt += INDENT_VALUE + INDENT_VALUE + "link(href=\"" + getPathInfoCssUtil().srcPath + "\", rel=\"stylesheet\", type=\"text/css\")\n";
                    break;
            }
        }
        if (dialogManager.getHtmlDoctype() != HTML_KEY_JADE) {
            _htmlTxt += INDENT_VALUE + "</head>\n";
            _htmlTxt += INDENT_VALUE + "<body>\n";
        }
        else {
            _htmlTxt += INDENT_VALUE + "body\n";
        }
        // HTML文本创建（可変部分）
        var infoArr = infoManager.getLayerInfo();
        _htmlTxt += _export({
            arr: infoArr,
            text: "",
            depth: 0
        });
        // HTML文本创建（固定部分）
        if (dialogManager.getHtmlDoctype() != HTML_KEY_JADE) {
            _htmlTxt += INDENT_VALUE + "</body>\n";
            _htmlTxt += "</html>\n";
        }
        // 文件写
        fileObj.write(_htmlTxt);
        fileObj.close();
    };
    function _export(e) {
        var arr = e.arr;
        var text = e.text;
        var depth = e.depth;
        var boxText = "";
        var tab = INDENT_VALUE + INDENT_VALUE;
        for (var i = 0; i < depth; i++) {
            tab += INDENT_VALUE;
        }
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            // HTML文本创建（可変部分）
            switch (arr[i].type) {
                // 通常图层
                case TYPE_KEY_NORMAL:
                    switch (dialogManager.getHtmlDoctype()) {
                        case HTML_KEY_HTML4:
                            text += tab + "<img id=\"" + arr[i].name + "\" alt=\"" + arr[i].alt + "\" src=\"" + getPathInfoImagesUtil().folderPathHtml + arr[i].name + getExtFromFileTypeUtil({ file: arr[i].file }) + "\" width=\"" + arr[i].width + "\" height=\"" + arr[i].height + "\">\n";
                            break;
                        case HTML_KEY_XHTML:
                            text += tab + "<img id=\"" + arr[i].name + "\" alt=\"" + arr[i].alt + "\" src=\"" + getPathInfoImagesUtil().folderPathHtml + arr[i].name + getExtFromFileTypeUtil({ file: arr[i].file }) + "\" width=\"" + arr[i].width + "\" height=\"" + arr[i].height + "\" />\n";
                            break;
                        case HTML_KEY_HTML5:
                            var w = arr[i].width < activeDocument.width.value ? arr[i].width : "100%";
                            text += tab + "<img id=\"" + arr[i].name + "\" class=\"" + arr[i].name.split('_').shift() + "\" alt=\"" + arr[i].alt + "\" src=\"" + getPathInfoImagesUtil().folderPathHtml + arr[i].name + getExtFromFileTypeUtil({ file: arr[i].file }) + "\" width=\"" + w + "\" height=\"" + arr[i].height + "\">\n";
                            break;
                        case HTML_KEY_JADE:
                            text += tab + "img#" + arr[i].name + "(alt=\"" + arr[i].alt + "\", src=\"" + getPathInfoImagesUtil().folderPathHtml + arr[i].name + getExtFromFileTypeUtil({ file: arr[i].file }) + "\", width=\"" + arr[i].width + "\", height=\"" + arr[i].height + "\")\n";
                            break;
                    }
                    break;
                // 文本图层
                case TYPE_KEY_TEXT:
                    switch (dialogManager.getHtmlDoctype()) {
                        case HTML_KEY_HTML4:
                            text += tab + "<p id=\"" + arr[i].name + "\">" + arr[i].text.contents.replace(/\r/g, "<br>\n" + tab + "\t") + "</p>\n";
                            break;
                        case HTML_KEY_XHTML:
                            text += tab + "<p id=\"" + arr[i].name + "\">" + arr[i].text.contents.replace(/\r/g, "<br />\n" + tab + "\t") + "</p>\n";
                            break;
                        case HTML_KEY_HTML5:
                            text += tab + "<p id=\"" + arr[i].name + "\">" + arr[i].text.contents.replace(/\r/g, "<br>\n" + tab + "\t") + "</p>\n";
                            break;
                        case HTML_KEY_JADE:
                            text += tab + "p#" + arr[i].name + " " + arr[i].text.contents.replace(/\r/g, "\n" + tab + INDENT_VALUE + "br\n" + tab + INDENT_VALUE + "|") + "\n";
                            break;
                    }
                    break;
                // 图层组
                case TYPE_KEY_GROUP:
                    if (dialogManager.getHtmlDoctype() != HTML_KEY_JADE) {
                        boxText = tab + "<div id=\"" + arr[i].name + "\">\n";
                        // 递归处理
                        text += _export({
                            arr: arr[arr[i].name],
                            text: boxText,
                            depth: depth + 1
                        });
                        //
                        text += tab + "</div>\n";
                    }
                    else {
                        boxText = tab + "div#" + arr[i].name + "\n";
                        // 递归处理
                        text += _export({
                            arr: arr[arr[i].name],
                            text: boxText,
                            depth: depth + 1
                        });
                    }
                    break;
            }
        }
        return text;
    }
};

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
            var layerName = getLayerNameUtil({ name: layer.name });
            if (layer.kind == LayerKind.NORMAL) {
                if (String(layer.name).charAt(0) == OPTION_KEY_BGIMAGE) {
                    // 背景图层
                    layoutInfoObj = _getLayoutInfo({ item: layer });
                    totalInfoObj = {
                        type: TYPE_KEY_BG,
                        name: layerName,
                        top: layoutInfoObj.top - top,
                        left: layoutInfoObj.left - left,
                        width: layoutInfoObj.width,
                        height: layoutInfoObj.height,
                        file: getFileInfoFromFileNameUtil({ name: layer.name }).type,
                        text: null,
                        alt: "",
                        color: getLayerColorUtil({ name: layer.name })
                    };
                    infoArr.push(totalInfoObj);
                }
                else {
                    // 通常图层
                    layoutInfoObj = _getLayoutInfo({ item: layer });
                    totalInfoObj = {
                        type: TYPE_KEY_NORMAL,
                        name: layerName,
                        top: layoutInfoObj.top - top,
                        left: layoutInfoObj.left - left,
                        width: layoutInfoObj.width,
                        height: layoutInfoObj.height,
                        file: getFileInfoFromFileNameUtil({ name: layer.name }).type,
                        text: null,
                        alt: getLayerAltUtil({ name: layer.name }),
                        color: getLayerColorUtil({ name: layer.name })
                    };
                    infoArr.push(totalInfoObj);
                }
            }
            else if (layer.kind == LayerKind.TEXT) {
                // 文本图层
                layoutInfoObj = _getLayoutInfo({ item: layer });
                var size = "";
                var align = null;
                var color = null;
                var bold = false;
                var italic = false;
                try {
                    if (layer.textItem.size) {
                        size = String(layer.textItem.size).replace(" pt", "px");
                    }
                }
                catch (e) {
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
                }
                catch (e) {
                }
                try {
                    if (layer.textItem.color.rgb.hexValue) {
                        color = "#" + layer.textItem.color.rgb.hexValue;
                    }
                }
                catch (e) {
                }
                try {
                    if (layer.textItem.fauxBold) {
                        bold = layer.textItem.fauxBold;
                    }
                }
                catch (e) {
                }
                try {
                    if (layer.textItem.fauxItalic) {
                        italic = layer.textItem.fauxItalic;
                    }
                }
                catch (e) {
                }
                var lineHeightTop = (lineHeight - parseInt(size)) / 2;
                if (!(lineHeightTop > 0))
                    lineHeightTop = 0;
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
                    color: getLayerColorUtil({ name: layer.name })
                };
                infoArr.push(totalInfoObj);
            }
            else if (layer.kind == undefined) {
                // 图层组
                layoutInfoObj = _getLayoutInfo({ item: layer });
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
                    color: getLayerColorUtil({ name: layer.name })
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
        }
        else {
            var bounds = item.bounds;
            var x1 = bounds[0].value;
            var y1 = bounds[1].value;
            var x2 = bounds[2].value;
            var y2 = bounds[3].value;
        }
        var top = y1;
        if (top < 0)
            top = 0;
        var left = x1;
        if (left < 0)
            left = 0;
        var width = x2 - x1;
        if (width < 0)
            width = 0;
        var height = y2 - y1;
        if (height < 0)
            height = 0;
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
                _traceInfoArr({ arr: arr[arr[i].name] });
            }
        }
    }
};

/// <reference path="../../jsx/omv.d.ts" />
// ==================== Util ==================== //
//
//
// ----- 图片定位信息取得
//
function getPathInfoImagesUtil() {
    var folderPathFull = "";
    var folderPathHtml = "";
    var folderPathCss = "";
    if (dialogManager.getImageFolderPath() == "") {
        folderPathFull = exportRoot;
        folderPathHtml = dialogManager.getRootPathFromHtml();
        folderPathCss = dialogManager.getRootPathFromCss();
    }
    else {
        folderPathFull = exportRoot + "/" + dialogManager.getImageFolderPath();
        folderPathHtml = dialogManager.getRootPathFromHtml() + dialogManager.getImageFolderPath() + "/";
        folderPathCss = dialogManager.getRootPathFromCss() + dialogManager.getImageFolderPath() + "/";
    }
    return {
        folderPathFull: folderPathFull,
        folderPathHtml: folderPathHtml,
        folderPathCss: folderPathCss
    };
}
//
// ----- HTML定位信息取得
//
function getPathInfoHtmlUtil() {
    var fullPath = "";
    var folderPath = "";
    var fileName = "";
    var srcPath = "";
    var ext = "";
    if (dialogManager.getHtmlDoctype() != HTML_KEY_JADE) {
        ext = ".html";
    }
    else {
        ext = ".jade";
    }
    if (dialogManager.getHtmlFolderPath() == "") {
        fullPath = exportRoot + "/" + dialogManager.getHtmlFileName() + ext;
        folderPath = exportRoot;
        fileName = dialogManager.getHtmlFileName() + ext;
        srcPath = dialogManager.getRootPathFromHtml() + dialogManager.getHtmlFileName() + ext;
    }
    else {
        fullPath = exportRoot + "/" + dialogManager.getHtmlFolderPath() + "/" + dialogManager.getHtmlFileName() + ext;
        folderPath = exportRoot + "/" + dialogManager.getHtmlFolderPath();
        fileName = dialogManager.getHtmlFileName() + ext;
        srcPath = dialogManager.getRootPathFromHtml() + dialogManager.getHtmlFolderPath() + "/" + dialogManager.getHtmlFileName() + ext;
    }
    return {
        fullPath: fullPath,
        folderPath: folderPath,
        fileName: fileName,
        srcPath: srcPath
    };
}
//
// ----- CSS定位信息取得
//
function getPathInfoCssUtil() {
    var fullPath = "";
    var folderPath = "";
    var fileName = "";
    var srcPath = "";
    if (dialogManager.getCssFolderPath() == "") {
        fullPath = exportRoot + "/" + dialogManager.getCssFileName() + ".css";
        folderPath = exportRoot;
        fileName = dialogManager.getCssFileName() + ".css";
        srcPath = dialogManager.getRootPathFromHtml() + dialogManager.getCssFileName() + ".css";
    }
    else {
        fullPath = exportRoot + "/" + dialogManager.getCssFolderPath() + "/" + dialogManager.getCssFileName() + ".css";
        folderPath = exportRoot + "/" + dialogManager.getCssFolderPath();
        fileName = dialogManager.getCssFileName() + ".css";
        srcPath = dialogManager.getRootPathFromHtml() + dialogManager.getCssFolderPath() + "/" + dialogManager.getCssFileName() + ".css";
    }
    return {
        fullPath: fullPath,
        folderPath: folderPath,
        fileName: fileName,
        srcPath: srcPath
    };
}
//
// ----- 图层名取得
//
function getLayerNameUtil(e) {
    var str = (e) ? e.name : "";
    if (String(str).charAt(0) == OPTION_KEY_BGIMAGE) {
        str = String(str).slice(1);
    }
    var index = String(str).indexOf(OPTION_KEY_ALT);
    if (1 <= index) {
        str = String(str).substr(0, index);
    }
    index = String(str).indexOf(OPTION_KEY_COLOR);
    if (1 <= index) {
        str = String(str).substr(0, index);
    }
    str = str.replace(".png", "");
    str = str.replace(".jpg", "");
    str = str.replace(".gif", "");
    return str;
}
//
// ----- ALT値取得
//
function getLayerAltUtil(e) {
    var str = (e) ? e.name : "";
    var index = String(str).indexOf(OPTION_KEY_ALT);
    if (1 <= index) {
        str = String(str).substr(index + 1, String(str).length - 1);
        index = String(str).indexOf(OPTION_KEY_COLOR);
        if (1 <= index) {
            return String(str).substr(0, index);
        }
        else {
            return str;
        }
    }
    else {
        return "";
    }
}
//
// ----- 背景色取得
//
function getLayerColorUtil(e) {
    var str = (e) ? e.name : "";
    var index = String(str).indexOf(OPTION_KEY_COLOR);
    if (1 <= index) {
        str = String(str).substr(index + 1, String(str).length - 1);
        index = String(str).indexOf(OPTION_KEY_ALT);
        if (1 <= index) {
            str = String(str).substr(0, index);
        }
        return getHexColorTextUtil(str);
    }
    else {
        return null;
    }
}
//
// ----- 文件类型扩展名取得
//
function getExtFromFileTypeUtil(e) {
    var str = (e || e.file) ? e.file : dialogManager.getDefaultFileType();
    switch (str) {
        case FILE_KEY_PNG:
            return ".png";
        // break;
        case FILE_KEY_JPG:
            return ".jpg";
        // break;
        case FILE_KEY_GIF:
            return ".gif";
    }
}
//
// ----- 文件名扩展名取得
//
function getFileInfoFromFileNameUtil(e) {
    var str = String(e.name);
    if (0 < str.lastIndexOf(".png")) {
        return {
            type: FILE_KEY_PNG,
            ext: ".png"
        };
    }
    else if (0 < str.lastIndexOf(".jpg")) {
        return {
            type: FILE_KEY_JPG,
            ext: ".jpg"
        };
    }
    else if (0 < str.lastIndexOf(".gif")) {
        return {
            type: FILE_KEY_GIF,
            ext: ".gif"
        };
    }
    else {
        return {
            type: dialogManager.getDefaultFileType(),
            ext: getExtFromFileTypeUtil({ file: dialogManager.getDefaultFileType() })
        };
    }
}
//
// ----- 目录创建
//
function createDirectoryUtil(e) {
    // 图片文件夹
    var path = e.path;
    var depth = 0;
    var directory = exportRoot;
    var arr = null;
    if (path != "") {
        arr = String(path).split("/");
        depth = arr.length;
    }
    if (0 < depth) {
        for (var i = 0; i < depth; i++) {
            directory += "/" + arr[i];
            var folderObj = new Folder(directory);
            folderObj.create();
        }
    }
    return folderObj;
}
//
// ----- 图层通道蒙板存在判断
//
function hasChannelMaskByName(name) {
    var ref = new ActionReference();
    ref.putName(charIDToTypeID("Lyr "), name);
    return executeActionGet(ref).getBoolean(stringIDToTypeID("hasUserMask"));
}
//
// ----- 图层矢量蒙板存在判断
//
function hasVectorMaskByName(name) {
    var ref = new ActionReference();
    ref.putName(charIDToTypeID("Lyr "), name);
    return executeActionGet(ref).getBoolean(stringIDToTypeID("hasVectorMask"));
}
//
// ----- 获取 HexColor
//
function getHexColorTextUtil(value) {
    var str = String(value).replace("#", "");
    str = String(/[0-9A-Fa-f]{6}/g.exec(str));
    if (!str) {
        str = "ffffff";
    }
    return str;
}
//
// ----- 错误检测
//
function checkErrorEvent() {
    // 错误检测
    errorChecker.check();
}

/// <reference path="../../jsx/omv.d.ts" />
//
// ==================== Action ==================== //
var OPTION_KEY_BGIMAGE = "*"; // 选项键（背景图层）
var OPTION_KEY_ALT = "@"; // 选项键（ALTタグ）
var OPTION_KEY_COLOR = "#"; // 选项键（背景色）
var INDENT_VALUE = "    "; // Jade缩进使用文字
var TYPE_KEY_BG = "bg"; // 键盘键（背景图层）
var TYPE_KEY_NORMAL = "normal"; // 键盘键（通常图层）
var TYPE_KEY_TEXT = "text"; // 键盘键（文本图层）
var TYPE_KEY_GROUP = "group"; // 键盘键（图层组）
var FILE_KEY_PNG = "png"; // 文件键（PNG）
var FILE_KEY_JPG = "jpg"; // 文件键（JPEG）
var FILE_KEY_GIF = "gif"; // 文件键（GIF）
var HTML_KEY_HTML5 = "html5"; // HTML键（html5）
var HTML_KEY_XHTML = "xhtml"; // HTML键（xhtml）
var HTML_KEY_HTML4 = "html4"; // HTML键（html4.01）
var HTML_KEY_JADE = "jade"; // HTML键（jade）
var dialogManager = new DialogManager();
var errorChecker = new ErrorChecker();
var imageExporter = new ImageExporter(File);
var infoManager = new InfoManager();
var htmlExporter = new HtmlExporter(File);
var cssExporter = new CssExporter(dialogManager);
// 属性
var exportRoot; // 输出根目录
// 初始化
initEvent();
// 对话框打开
openDialogEvent();
//
// ==================== Event ==================== //
//
//
// ----- 初始化
//
function initEvent() {
    // 属性初始化
    exportRoot = activeDocument.path + "/" + String(activeDocument.name).substring(0, String(activeDocument.name).length - 4);
    // 实例初始化
    dialogManager.init();
    errorChecker.init();
    imageExporter.init();
    infoManager.init();
    htmlExporter.init();
    cssExporter.init();
}
//
// ----- 对话框打开
//
function openDialogEvent() {
    // 对话框打开
    dialogManager.open();
}
//
function startExportEvent() {
    // 文件夹
    var folderObj = new Folder(exportRoot);
    folderObj.create();
    if (dialogManager.getIsExportImages()) {
        // 图片输出
        imageExporter.export();
    }
    if (dialogManager.getIsExportHtml() || dialogManager.getIsExportCss()) {
        // 信息提取
        infoManager.extract();
        if (dialogManager.getIsExportHtml()) {
            // HTML输出
            htmlExporter.export();
        }
        if (dialogManager.getIsExportCss()) {
            // CSS输出
            cssExporter.export();
        }
    }
    // 导出完成
    completeExportEvent();
}
//
// ----- 导出完成
//
function completeExportEvent() {
    alert("导出完成");
}
