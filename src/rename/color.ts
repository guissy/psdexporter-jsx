var POINT_STEP = app.activeDocument.width.value / 20 >> 0;
var POINT_START = 2;
function getPointColor(point:number[]):string {
    var hex = null;
    if (point &&
        point[0] >= 0 &&
        point[1] >= 0 &&
        point[0] <= app.activeDocument.width.value &&
        point[1] <= app.activeDocument.height.value) {
        const uv = [new UnitValue(point[0], "px"), new UnitValue(point[1], "px")];
        app.activeDocument.colorSamplers.removeAll();
        const colorSampler = app.activeDocument.colorSamplers.add(uv);
        try {
            hex = '#' + colorSampler.color.rgb.hexValue;
        } catch (err) {

        }
    }
    return hex;
}
function getLayerColor(layer:ArtLayer):string {
    app.activeDocument.activeLayer = layer;
    toggleOtherLayersVisibility();
    var hex = null;
    if (layer) {
        if (layer.kind === LayerKind.SOLIDFILL && layer.fillOpacity === 0) {
            hex = getSolidFillColor();
        } else {
            const [x1,y1,x2,y2] = layer.bounds;
            const w:number = x1.value + (x2.value - x1.value) / 2;
            const h:number = y1.value + (y2.value - y1.value) / 2;
            hex = getPointColor([w, h]);
        }
    }
    toggleOtherLayersVisibility();
    return hex;
}


function toggleOtherLayersVisibility() {
    var desc = new ActionDescriptor();
    var list = new ActionList();
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    list.putReference(ref);
    desc.putList(charIDToTypeID('null'), list);
    desc.putBoolean(charIDToTypeID('TglO'), true);
    executeAction(charIDToTypeID('Shw '), desc, DialogModes.NO);
}

/* 细线也是背景 */
function isBgLayer(layer:ArtLayer) {
    app.activeDocument.activeLayer = layer;
    var b = true;
    if (layer.kind === LayerKind.SOLIDFILL && layer.fillOpacity === 0) {
        b = false;
    } else {
        toggleOtherLayersVisibility();
        var [b1,b2,b3,b4] = layer.bounds;
        var [x1,y1,x2,y2] = [b1.value, b2.value, b3.value, b4.value];
        x1 = x1 + 1;
        y1 = y1 + 1;
        var w = x2 - x1;
        var h = y2 - y1;
        var lines = [];
        POINT_START = getStrokeSize() * 3;
        if (w > POINT_START * 2 && h > POINT_START * 2) {
            var line1 = [], line2 = [], line3 = [], line4 = [];
            for (var x = x1 + POINT_START; x < x2 - POINT_START; x += POINT_STEP) {
                line1.push([x, y1 + (y2 - y1) / 2]);
                line3.push([x, y1 + (x - x1) * (y2 - y1) / (x2 - x1)]);
            }
            for (var y = y1 + POINT_START; y < y2 - POINT_START; y += POINT_STEP) {
                line2.push([x1 + (x2 - x1) / 2, y]);
                line4.push([x1 + (y - y1) * (x2 - x1) / (y2 - y1), y]);
            }
            lines = line1.concat(line2).concat(line3).concat(line4);
        } else if (w <= POINT_START * 2) {
            for (var y = y1; y < y2; y += 1) {
                lines.push([x1 + (x2 - x1) / 2, y]);
            }
        } else if (h <= POINT_START * 2) {
            for (var x = x1; x < x2; x += 1) {
                lines.push([x, y1 + (y2 - y1) / 2]);
            }
        }
        var color1 = null;
        for (var i = 0; i < lines.length; i++) {
            var color2 = getPointColor(lines[i]);
            if (color2 == null) {
                b = false;
                break;
            } else if (color2 != null && color1 != null && color2 != color1) {
                b = false;
                break;
            }
            color1 = color2;
        }
        toggleOtherLayersVisibility();
    }
    return b;
}
