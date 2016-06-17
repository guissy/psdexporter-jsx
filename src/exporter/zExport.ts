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
