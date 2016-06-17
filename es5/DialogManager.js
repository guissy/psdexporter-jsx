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
