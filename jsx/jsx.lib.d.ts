/// <reference no-default-lib="true"/>
/////////////////////////////
/// ECMAScript Array API (specially handled by compiler)
/////////////////////////////
interface Array<T> {
    length:number;
    toString():string;
    toLocaleString():string;
    push(...items:T[]):number;
    pop():T;
    concat<U extends T[]>(...items:U[]):T[];
    concat(...items:T[]):T[];
    join(separator?:string):string;
    reverse():T[];
    shift():T;
    slice(start?:number, end?:number):T[];
    sort(compareFn?:(a:T, b:T) => number):T[];
    splice(start:number):T[];
    splice(start:number, deleteCount:number, ...items:T[]):T[];
    unshift(...items:T[]):number;
    indexOf(searchElement:T, fromIndex?:number):number;
    lastIndexOf(searchElement:T, fromIndex?:number):number;
    every(callbackfn:(value:T, index:number, array:T[]) => boolean, thisArg?:any):boolean;
    some(callbackfn:(value:T, index:number, array:T[]) => boolean, thisArg?:any):boolean;
    forEach(callbackfn:(value:T, index:number, array:T[]) => void, thisArg?:any):void;
    map<U>(callbackfn:(value:T, index:number, array:T[]) => U, thisArg?:any):U[];
    filter(callbackfn:(value:T, index:number, array:T[]) => boolean, thisArg?:any):T[];
    reduce(callbackfn:(previousValue:T, currentValue:T, currentIndex:number, array:T[]) => T, initialValue?:T):T;
    reduce<U>(callbackfn:(previousValue:U, currentValue:T, currentIndex:number, array:T[]) => U, initialValue:U):U;
    reduceRight(callbackfn:(previousValue:T, currentValue:T, currentIndex:number, array:T[]) => T, initialValue?:T):T;
    reduceRight<U>(callbackfn:(previousValue:U, currentValue:T, currentIndex:number, array:T[]) => U, initialValue:U):U;
    [n:number]:T;
}
interface ArrayConstructor {
    new (arrayLength?:number):any[];
    new <T>(arrayLength:number):T[];
    new <T>(...items:T[]):T[];
    (arrayLength?:number):any[];
    <T>(arrayLength:number):T[];
    <T>(...items:T[]):T[];
    isArray(arg:any):arg is Array<any>;
    prototype:Array<any>;
}
declare var Array:ArrayConstructor;
interface Boolean {
    valueOf():boolean;
}
interface Function {
    apply(thisArg:any, argArray?:any):any;
    call(thisArg:any, ...argArray:any[]):any;
    bind(thisArg:any, ...argArray:any[]):any;
    prototype:any;
    length:number;
    // Non-standard extensions
    arguments:any;
    caller:Function;
}
interface FunctionConstructor {
    new (...args:string[]):Function;
    (...args:string[]):Function;
    prototype:Function;
}
declare var Function:FunctionConstructor;
interface IArguments {
    [index:number]:any;
    length:number;
    callee:Function;
}
interface BooleanConstructor {
    new (value?:any):Boolean;
    (value?:any):boolean;
    prototype:Boolean;
}
declare var Boolean:BooleanConstructor;
interface Number {
    toString(radix?:number):string;
    toFixed(fractionDigits?:number):string;
    toExponential(fractionDigits?:number):string;
    toPrecision(precision?:number):string;
    valueOf():number;
}
interface NumberConstructor {
    new (value?:any):Number;
    (value?:any):number;
    prototype:Number;
    MAX_VALUE:number;
    MIN_VALUE:number;
    NaN:number;
    NEGATIVE_INFINITY:number;
    POSITIVE_INFINITY:number;
}
declare var Number:NumberConstructor;
interface Object {
    constructor:Function;
    toString():string;
    toLocaleString():string;
    valueOf():Object;
    hasOwnProperty(v:string):boolean;
    isPrototypeOf(v:Object):boolean;
    propertyIsEnumerable(v:string):boolean;
}
interface ObjectConstructor {
    new (value?:any):Object;
    ():any;
    (value:any):any;
    prototype:Object;
    getPrototypeOf(o:any):any;
    getOwnPropertyNames(o:any):string[];
    seal<T>(o:T):T;
    freeze<T>(o:T):T;
    preventExtensions<T>(o:T):T;
    isSealed(o:any):boolean;
    isFrozen(o:any):boolean;
    isExtensible(o:any):boolean;
    keys(o:any):string[];
}
declare var Object:ObjectConstructor;
interface RegExpMatchArray extends Array<string> {
    index?:number;
    input?:string;
}
interface RegExpExecArray extends Array<string> {
    index:number;
    input:string;
}
interface RegExp {
    exec(string:string):RegExpExecArray;
    test(string:string):boolean;
    source:string;
    global:boolean;
    ignoreCase:boolean;
    multiline:boolean;
    lastIndex:number;
    // Non-standard extensions
    compile():RegExp;
}
interface RegExpConstructor {
    new (pattern:string, flags?:string):RegExp;
    (pattern:string, flags?:string):RegExp;
    prototype:RegExp;
    // Non-standard extensions
    $1:string;
    $2:string;
    $3:string;
    $4:string;
    $5:string;
    $6:string;
    $7:string;
    $8:string;
    $9:string;
    lastMatch:string;
}
declare var RegExp:RegExpConstructor;
interface String {
    toString():string;
    charAt(pos:number):string;
    charCodeAt(index:number):number;
    concat(...strings:string[]):string;
    indexOf(searchString:string, position?:number):number;
    lastIndexOf(searchString:string, position?:number):number;
    localeCompare(that:string):number;
    match(regexp:string):RegExpMatchArray;
    match(regexp:RegExp):RegExpMatchArray;
    replace(searchValue:string, replaceValue:string):string;
    replace(searchValue:string, replacer:(substring:string, ...args:any[]) => string):string;
    replace(searchValue:RegExp, replaceValue:string):string;
    replace(searchValue:RegExp, replacer:(substring:string, ...args:any[]) => string):string;
    search(regexp:string):number;
    search(regexp:RegExp):number;
    slice(start?:number, end?:number):string;
    split(separator:string, limit?:number):string[];
    split(separator:RegExp, limit?:number):string[];
    substring(start:number, end?:number):string;
    toLowerCase():string;
    toLocaleLowerCase():string;
    toUpperCase():string;
    toLocaleUpperCase():string;
    trim():string;
    length:number;
    // IE extensions
    substr(from:number, length?:number):string;
    valueOf():string;
    [index:number]:string;
}
interface StringStatic {
    new (value?:any):String;
    (value?:any):string;
    prototype:String;
    fromCharCode(...codes:number[]):string;
}
declare var String:StringStatic;
declare interface Folder {
    new (path:any);
    fs:any;
    current:any;
    startup:any;
    appPackage:any;
    system:any;
    trash:any;
    temp:any;
    userData:any;
    appData:any;
    commonFiles:any;
    myDocuments:any;
    desktop:any;
    alias:any;
    created:any;
    error:any;
    exists:any;
    fsName:any;
    fullName:any;
    absoluteURI:any;
    relativeURI:any;
    modified:any;
    name:any;
    displayName:any;
    path:any;
    parent:any;
    encode:(name:any) => String;
    decode:(uri:any) => String;
    isEncodingAvailable:(name:any) => Boolean;
    selectDialog:(prompt:any) => any;
    resolve:() => any;
    rename:(newName:any) => Boolean;
    remove:() => Boolean;
    changePath:(path:any) => Boolean;
    getRelativeURI:(basePath:any) => String;
    execute:() => Boolean;
    toString:() => String;
    toSource:() => String;
    selectDlg:(prompt:any) => any;
    getFiles:(mask:any) => any[];
    create:() => Boolean;
}
declare var $:{
    error:any;
    version:any;
    build:any;
    buildDate:any;
    global:any;
    stack:any;
    level:any;
    flags:any;
    strict:any;
    locale:any;
    localize:any;
    decimalPoint:any;
    memCache:any;
    screens:any;
    os:any;
    fileName:any;
    line:any;
    hiresTimer:any;
    engineName:any;
    includePath:any;
    about:() => any;
    toString:() => any;
    write:(text:any) => void;
    writeln:(text:any) => void;
    bp:(condition:any) => void;
    getenv:(name:any) => any;
    setenv:(name:any, value:any) => void;
    sleep:(msecs:any) => void;
    colorPicker:(color:any) => any;
    evalFile:(file:any, timeout:any) => any;
    gc:() => void;
};
interface Date {
    toString():string;
    toDateString():string;
    toTimeString():string;
    toLocaleString():string;
    toLocaleDateString():string;
    toLocaleTimeString():string;
    valueOf():number;
    getTime():number;
    getFullYear():number;
    getUTCFullYear():number;
    getMonth():number;
    getUTCMonth():number;
    getDate():number;
    getUTCDate():number;
    getDay():number;
    getUTCDay():number;
    getHours():number;
    getUTCHours():number;
    getMinutes():number;
    getUTCMinutes():number;
    getSeconds():number;
    getUTCSeconds():number;
    getMilliseconds():number;
    getUTCMilliseconds():number;
    getTimezoneOffset():number;
    setTime(time:number):number;
    setMilliseconds(ms:number):number;
    setUTCMilliseconds(ms:number):number;
    setSeconds(sec:number, ms?:number):number;
    setUTCSeconds(sec:number, ms?:number):number;
    setMinutes(min:number, sec?:number, ms?:number):number;
    setUTCMinutes(min:number, sec?:number, ms?:number):number;
    setHours(hours:number, min?:number, sec?:number, ms?:number):number;
    setUTCHours(hours:number, min?:number, sec?:number, ms?:number):number;
    setDate(date:number):number;
    setUTCDate(date:number):number;
    setMonth(month:number, date?:number):number;
    setUTCMonth(month:number, date?:number):number;
    setFullYear(year:number, month?:number, date?:number):number;
    setUTCFullYear(year:number, month?:number, date?:number):number;
    toUTCString():string;
    toISOString():string;
    toJSON(key?:any):string;
}

interface DateConstructor {
    new ():Date;
    new (value:number):Date;
    new (value:string):Date;
    new (year:number, month:number, date?:number, hours?:number, minutes?:number, seconds?:number, ms?:number):Date;
    ():string;
    prototype:Date;
    parse(s:string):number;
    UTC(year:number, month:number, date?:number, hours?:number, minutes?:number, seconds?:number, ms?:number):number;
    now():number;
}

declare var Date:DateConstructor;
declare function File(path:any):void;
declare function Folder(path:any):void;
declare var Math:{
    E:any;
    LN10:any;
    LN2:any;
    LOG2E:any;
    LOG10E:any;
    PI:any;
    SQRT1_2:any;
    SQRT2:any;
    abs:(x:any) => any;
    acos:(x:any) => any;
    asin:(x:any) => any;
    atan:(x:any) => any;
    atan2:(y:any, x:any) => any;
    ceil:(x:any) => any;
    cos:(x:any) => any;
    exp:(x:any) => any;
    floor:(x:any) => any;
    log:(x:any) => any;
    max:(value1:any, value2:any) => any;
    min:(value1:any, value2:any) => any;
    pow:(x:any, y:any) => any;
    random:() => any;
    round:(x:any) => any;
    sin:(x:any) => any;
    sqrt:(x:any) => any;
    tan:(x:any) => any;
};
declare function Namespace(prefix:any, uri:any):void;
declare function QName(uri:any, name:any):void;
declare var Reflection:{
    name:any;
    methods:any;
    properties:any;
    staticMethods:any;
    staticProperties:any;
    description:any;
    help:any;
    sampleCode:any;
    sampleFile:any;
    find:(name:any) => any;
    toXML:() => any;
};
declare var ReflectionInfo:{
    parent:any;
    name:any;
    type:any;
    dataType:any;
    arguments:any;
    min:any;
    max:any;
    defaultValue:any;
    isCollection:any;
    description:any;
    help:any;
    sampleCode:any;
    sampleFile:any;
};
declare function Socket():void;
interface UnitValue {
    baseUnit:any;
    type:any;
    value:any;
    convert:(unitName:any) => any;
    as:(unitName:any) => any;
}
interface UnitValueConstructor {
    new (p0?:number, p1?:string);
}
declare var UnitValue:UnitValueConstructor;

declare class UnitRect extends Array {
    new(x1:UnitValue, y1:UnitValue, x2:UnitValue, y2:UnitValue);
}
declare function XML(text:any):void;
declare var XMLList:{};


declare var NaN:any;
declare var Infinity:any;
// declare var undefined:any;
declare var encodeURI:(text:any) => any;
declare var encodeURIComponent:(text:any) => any;
declare var decodeURI:(uri:any) => any;
declare var decodeURIComponent:(uri:any) => any;
declare var escape:(aString:any) => any;
declare var eval:(stringExpression:any) => any;
declare var uneval:(what:any) => any;
declare var isFinite:(expression:any) => any;
declare var isNaN:(expression:any) => any;
declare var parseInt:(text:string, base?:number) => any;
declare var parseFloat:(text:any) => any;
declare var unescape:(stringExpression:any) => any;
declare var localize:(what:any, argument:any) => any;
declare var isXMLName:(name:any) => any;
declare var setDefaultXMLNamespace:(namespaces:any) => void;
declare var alert:(message:any, title?:any, errorIcon?:any) => void;
declare var confirm:(message:any, noAsDefault:any, title:any) => any;
declare var prompt:(prompt:any, defaults:any, title:any) => any;
interface Error {
    name:string;
    message:string;
    description:string;
    toSource():string;
}

interface ErrorConstructor {
    new (message?:string):Error;
    (message?:string):Error;
    prototype:Error;
}

declare var Error:ErrorConstructor;
interface TypeError extends Error {
}
interface TypeErrorConstructor {
    new (message?:string):TypeError;
    (message?:string):TypeError;
    prototype:TypeError;
}
declare var TypeError:TypeErrorConstructor;
interface ArrayBuffer {
    byteLength:number;
    slice(begin:number, end?:number):ArrayBuffer;
}

interface ArrayBufferConstructor {
    prototype:ArrayBuffer;
    new (byteLength:number):ArrayBuffer;
    // isView(arg: any): arg is ArrayBufferView;
}
declare var ArrayBuffer:ArrayBufferConstructor;


interface Window {
    frameworkName:any;
    version:any;
    graphics:any;
    visible:any;
    bounds:any;
    frameBounds:any;
    frameLocation:any;
    frameSize:any;
    location:any;
    maximumSize:any;
    minimumSize:any;
    preferredSize:any;
    size:any;
    windowBounds:any;
    characters:any;
    justify:any;
    text:any;
    active:any;
    shortcutKey:any;
    cancelElement:any;
    defaultElement:any;
    maximized:any;
    minimized:any;
    alignChildren:any;
    children:any;
    layout:any;
    margins:any;
    orientation:any;
    spacing:any;
    alignment:any;
    properties:any;
    enabled:any;
    helpTip:any;
    indent:any;
    parent:any;
    window:any;
    type:any;
    opacity:any;
    find:(type:any, title:any) => Window;
    alert:(message:any, title:any, errorIcon:any) => void;
    confirm:(message:any, noAsDefault:any, title:any) => Boolean;
    prompt:(prompt:any, defaults:any, title:any) => String;
    show:() => void;
    hide:() => void;
    notify:(eventName:any) => void;
    center:(window:any) => void;
    close:(returns:any) => void;
    add:(type:any, bounds:any, text:any, properties:any) => Object;
    remove:(what:any) => void;
    addEventListener:(eventName:any, handler:any, capturePhase:any) => Boolean;
    removeEventListener:(eventName:any, handler:any, capturePhase:any) => Boolean;
    dispatchEvent:() => any;
    onActivate:() => void;
    onDeactivate:() => void;
    onClose:() => Boolean;
    onMove:() => void;
    onMoving:() => void;
    onResize:() => void;
    onResizing:() => void;
    onShortcutKey:() => void;
    onShow:() => void;
}

interface WindowContructor {
    new (type:any, title:any, bounds:any, properties?:any):any;
}

declare var Window:WindowContructor;

