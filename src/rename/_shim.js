/// <reference path="../../jsx/omv.d.ts" />
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n != n) {
                n = 0;
            }
            else if (n != 0 && n != Infinity && n != -Infinity) {
                var nn = 1;
                if (nn <= 0)
                    nn = -1;
                n = nn * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}
function getStrokeSize() {
    try {
        var ref = new ActionReference();
        ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        var desc = executeActionGet(ref).getObjectValue(stringIDToTypeID('layerEffects')).getObjectValue(stringIDToTypeID('frameFX'));
        return desc.getUnitDoubleValue(stringIDToTypeID('size'));
    }
    catch (e) { }
}
function ungroup() {
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
    m_Ref01.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    m_Dsc01.putReference(cTID("null"), m_Ref01);
    try {
        executeAction(sTID("ungroupLayersEvent"), m_Dsc01, DialogModes.NO);
    }
    catch (e) { }
}
function cTID(s) { return charIDToTypeID(s); }
function sTID(s) { return stringIDToTypeID(s); }
///////////////////////////////////////////////////////////////////////////////
// Function: setSelectedLayers
// Usage: Selects an array of layers
// Input:  Array selectedLayers
// Return: <none>
///////////////////////////////////////////////////////////////////////////////
function setSelectedLayers(layerIndexesOrNames) {
    // first select the first one
    setSelectedLayer(layerIndexesOrNames[0]);
    // then add to the selection
    for (var i = 1; i < layerIndexesOrNames.length; i++) {
        addSelectedLayer(layerIndexesOrNames[i]);
    }
}
///////////////////////////////////////////////////////////////////////////////
// Function: setSelectedLayer
// Usage: Selects the first layer
// Input:  Array selectedLayers
// Return: <none>
///////////////////////////////////////////////////////////////////////////////
function setSelectedLayer(layerIndexOrName) {
    try {
        var id239 = charIDToTypeID("slct");
        var desc45 = new ActionDescriptor();
        var id240 = charIDToTypeID("null");
        var ref43 = new ActionReference();
        var id241 = charIDToTypeID("Lyr ");
        if (typeof layerIndexOrName == "number") {
            ref43.putIndex(id241, layerIndexOrName);
        }
        else {
            ref43.putName(id241, layerIndexOrName);
        }
        desc45.putReference(id240, ref43);
        var id242 = charIDToTypeID("MkVs");
        desc45.putBoolean(id242, false);
        executeAction(id239, desc45, DialogModes.NO);
    }
    catch (e) {
        ; // do nothing
    }
}
///////////////////////////////////////////////////////////////////////////////
// Function: addSelectedLayer
// Usage: adds the rest of the layers in the array to the first layer
// Input:  Array selectedLayers
// Return: <none>
///////////////////////////////////////////////////////////////////////////////
function addSelectedLayer(layerIndexOrName) {
    try {
        var id243 = charIDToTypeID("slct");
        var desc46 = new ActionDescriptor();
        var id244 = charIDToTypeID("null");
        var ref44 = new ActionReference();
        var id245 = charIDToTypeID("Lyr ");
        if (typeof layerIndexOrName == "number") {
            ref44.putIndex(id245, layerIndexOrName);
        }
        else {
            ref44.putName(id245, layerIndexOrName);
        }
        desc46.putReference(id244, ref44);
        var id246 = stringIDToTypeID("selectionModifier");
        var id247 = stringIDToTypeID("selectionModifierType");
        var id248 = stringIDToTypeID("addToSelection");
        desc46.putEnumerated(id246, id247, id248);
        var id249 = charIDToTypeID("MkVs");
        desc46.putBoolean(id249, false);
        executeAction(id243, desc46, DialogModes.NO);
    }
    catch (e) {
        ; // do nothing
    }
}
function groupSelected(name) {
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
    m_Ref01.putClass(sTID("layerSection"));
    m_Dsc01.putReference(cTID("null"), m_Ref01);
    var m_Ref02 = new ActionReference();
    m_Ref02.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    m_Dsc01.putReference(cTID("From"), m_Ref02);
    var m_Dsc02 = new ActionDescriptor();
    m_Dsc02.putString(cTID("Nm  "), name);
    m_Dsc01.putObject(cTID("Usng"), sTID("layerSection"), m_Dsc02);
    executeAction(cTID("Mk  "), m_Dsc01, DialogModes.NO);
}
function moveLayerToLayerSet(fromID, toID) {
    var desc5 = new ActionDescriptor();
    var ref4 = new ActionReference();
    ref4.putIdentifier(charIDToTypeID('Lyr '), Number(fromID));
    desc5.putReference(charIDToTypeID('null'), ref4);
    var ref5 = new ActionReference();
    ref5.putIndex(charIDToTypeID('Lyr '), getLayerIndexByID(toID));
    desc5.putReference(charIDToTypeID('T   '), ref5);
    desc5.putBoolean(charIDToTypeID('Adjs'), false);
    desc5.putInteger(charIDToTypeID('Vrsn'), 5);
    try {
        executeAction(charIDToTypeID('move'), desc5, DialogModes.NO);
    }
    catch (e) { }
}
;
function getLayerID() {
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    var desc = executeActionGet(ref);
    return desc.getInteger(stringIDToTypeID('layerID'));
}
;
function getLayerIndexByID(ID) {
    var ref = new ActionReference();
    ref.putIdentifier(charIDToTypeID('Lyr '), ID);
    try {
        app.activeDocument.backgroundLayer;
        return executeActionGet(ref).getInteger(charIDToTypeID("ItmI")) - 1;
    }
    catch (e) {
        return executeActionGet(ref).getInteger(charIDToTypeID("ItmI"));
    }
}
;
function getSolidFillColor() {
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    var layerDesc = executeActionGet(ref);
    var adjList = layerDesc.getList(stringIDToTypeID('adjustment'));
    var theColors = adjList.getObjectValue(0).getObjectValue(stringIDToTypeID('color'));
    var red = theColors.getUnitDoubleValue(theColors.getKey(0));
    var grain = theColors.getUnitDoubleValue(theColors.getKey(1));
    var blue = theColors.getUnitDoubleValue(theColors.getKey(2));
    var color = new SolidColor();
    color.rgb.red = red;
    color.rgb.green = grain;
    color.rgb.blue = blue;
    return color.rgb.hexValue;
}
