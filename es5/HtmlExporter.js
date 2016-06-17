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
