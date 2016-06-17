var fs = require('fs'),
    xml2js = require('xml2js'),
    o = {}, classes1 = [], str = '';
function typeTransform(w) {
    var result = 'any';
    if (w.datatype && w.datatype[0]) {
        var typeStr = w.datatype[0].type[0];
        if (typeof typeStr === 'string') {
            result = typeStr.replace('bool', 'boolean');
            result = result.replace('int', 'number');
            result = result.replace('uint', 'number');
        } else {
            result = typeStr._;
        }
    } else {
        result = 'void';
    }
    return result;
}
var parser = new xml2js.Parser();
fs.readFile('./omv.xml', function (err, data) {
    parser.parseString(data, function (err, result) {
        o = result;
        //       classes1 = o.dictionary.map[0].topicref.filter(v=> "topicref" in v).map(v=>
        // ({
        // 	comment:v.$.navtitle,
        // 	className:v.topicref.map(v=>v.$.navtitle)
        // }));
        // classes1 = classes1.forEach(v=>{
        // 	str += `\n\n\n//${v.comment}\n\n`;
        // 	str += v.className.map(v=>`exporter declare interface ${v}{}`).join('\n\n');
        // });

        o.dictionary.package[0].classdef.map(v=> {
            var type = 'class';
            if (v.elements[0].$.type === 'instance') type = 'class';
            if (v.$.name === 'global') type = '';
            var isArray = (v.elements[0].method || []).some(w=>w.$.name === '[]');
            var p = {
                superclass: isArray ? 'Array' : v.superclass,
                enumeration: v.$.enumeration,
                name: v.$.name,
                type: type,
                properties: (v.elements[0].property || []).map(w=>({
                    property: w.$.name,
                    datatype: typeTransform(w),
                    value: w.datatype[0].value,
                    description: v.shortdesc[0]
                })),
                methods: (v.elements[0].method || []).map(w=>({
                    method: w.$.name,
                    parameters: !w.parameters ? [] : w.parameters[0].parameter.map(w=>({
                        datatype: typeTransform(w),
                        description: w.shortdesc
                    })),
                    datatype: typeTransform(w),
                    description: v.shortdesc[0]
                })).filter(w=>/\w+/.test(w.method)),
                description: v.shortdesc[0]
            };
            if (p.enumeration) {
                str += `
/**
 ${p.description}
 */
 export declare enum ${p.name} {
`;
                p.properties.forEach(v=> {
                    str += `  ${v.property} = ${v.value[0]},\n`;
                });
                str += `\n}\n`;
            } else {
                if (p.type === '') {
                    return;
                }
                var superName = p.superclass ? 'extends ' + p.superclass : '';
                str += `
/**
 ${p.description}
 */
 export declare ${p.type} ${p.name} ${superName}{
`;
                if (p.type === '') {
                    str += `

					`;
                }
                p.properties.forEach(v=> {
                    str += `  ${v.property}: ${v.datatype};\t\t\t\t//${v.description}\n`;
                });
                p.methods.forEach(v=> {
                    var params1 = v.parameters.map((v, i)=>`\n * @param p${i} ${v.datatype} ${v.description}`);
                    var params2 = v.parameters.map((v, i)=>`p${i}: ${v.datatype}`).join(', ');
                    str += `\n
/** 
 * ${v.description} ${params1}
 */
`;
                    str += `  ${v.method}: (${params2})=> ${v.datatype};`;
                });
                str += `\n}\n`;
            }
            return str;
        });
        str += `
export declare class UnitPoint{}
export declare class UnitValue{
 constructor(p0:number,p1:string);
 value:number;
}
export declare class AliasArray{}
export declare class FileArray{}
export declare class UnitRect{}
export declare class PrintEncoding{}	
		`;
        fs.writeFile('jsx/omv.d.ts', str, 'utf-8');
    });
});