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
    } else {
        folderPathFull = exportRoot + "/" + dialogManager.getImageFolderPath();
        folderPathHtml = dialogManager.getRootPathFromHtml() + dialogManager.getImageFolderPath() + "/";
        folderPathCss = dialogManager.getRootPathFromCss() + dialogManager.getImageFolderPath() + "/";
    }
    return {
        folderPathFull:folderPathFull,
        folderPathHtml:folderPathHtml,
        folderPathCss:folderPathCss
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
    } else {
        ext = ".jade";
    }
    if (dialogManager.getHtmlFolderPath() == "") {
        fullPath = exportRoot + "/" + dialogManager.getHtmlFileName() + ext;
        folderPath = exportRoot;
        fileName = dialogManager.getHtmlFileName() + ext;
        srcPath = dialogManager.getRootPathFromHtml() + dialogManager.getHtmlFileName() + ext;
    } else {
        fullPath = exportRoot + "/" + dialogManager.getHtmlFolderPath() + "/" + dialogManager.getHtmlFileName() + ext;
        folderPath = exportRoot + "/" + dialogManager.getHtmlFolderPath();
        fileName = dialogManager.getHtmlFileName() + ext;
        srcPath = dialogManager.getRootPathFromHtml() + dialogManager.getHtmlFolderPath() + "/" + dialogManager.getHtmlFileName() + ext;
    }
    return {
        fullPath:fullPath,
        folderPath:folderPath,
        fileName:fileName,
        srcPath:srcPath
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
    } else {
        fullPath = exportRoot + "/" + dialogManager.getCssFolderPath() + "/" + dialogManager.getCssFileName() + ".css";
        folderPath = exportRoot + "/" + dialogManager.getCssFolderPath();
        fileName = dialogManager.getCssFileName() + ".css";
        srcPath = dialogManager.getRootPathFromHtml() + dialogManager.getCssFolderPath() + "/" + dialogManager.getCssFileName() + ".css";
    }
    return {
        fullPath:fullPath,
        folderPath:folderPath,
        fileName:fileName,
        srcPath:srcPath
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
        } else {
            return str;
        }
    } else {
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
    } else {
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
            // break;
    }
}

//
// ----- 文件名扩展名取得
//
function getFileInfoFromFileNameUtil(e) {
    var str = String(e.name);
    if (0 < str.lastIndexOf(".png")) {
        return {
            type:FILE_KEY_PNG,
            ext:".png"
        };
    } else if (0 < str.lastIndexOf(".jpg")) {
        return {
            type:FILE_KEY_JPG,
            ext:".jpg"
        };
    } else if (0 < str.lastIndexOf(".gif")) {
        return {
            type:FILE_KEY_GIF,
            ext:".gif"
        };
    } else {
        return {
            type:dialogManager.getDefaultFileType(),
            ext:getExtFromFileTypeUtil({file:dialogManager.getDefaultFileType()})
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
function hasChannelMaskByName(name){
    var ref = new ActionReference();
    ref.putName(charIDToTypeID("Lyr "), name);
    return executeActionGet(ref).getBoolean(stringIDToTypeID("hasUserMask"));
}

//
// ----- 图层矢量蒙板存在判断
//
function hasVectorMaskByName(name){
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