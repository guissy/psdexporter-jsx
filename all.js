/*
 * The $ object provides a number of debugging facilities and informational methods.
 */
var $ = {
    /*
     * The most recent run-time error information.
     * @type {Error}
     */
    error: undefined,
    /*
     * The version number of the ExtendScript engine.
     * @type {String}
     */
    version: undefined,
    /*
     * The ExtendScript build information.
     * @type {String}
     */
    build: undefined,
    /*
     * The ExtendScript build date.
     * @type {Date}
     */
    buildDate: undefined,
    /*
     * A reference to the global object, which contains the JavaScript global namespace.
     * @type {Object}
     */
    global: undefined,
    /*
     * The current stack trace.
     * @type {String}
     */
    stack: undefined,
    /*
     * The current debugging level, which enables or disables the JavaScript debugger.
     * @type {Number}
     */
    level: undefined,
    /*
     * Gets or sets low-level debug output flags.
     * @type {Number}
     */
    flags: undefined,
    /*
     * Sets or clears strict mode for object modification.
     * @type {any}
     */
    strict: undefined,
    /*
     * Gets or sets the current locale.
     * @type {String}
     */
    locale: undefined,
    /*
     * Set to true to enable the extended localization features of the built-in toString() method.
     * @type {Boolean}
     */
    localize: undefined,
    /*
     * The character used as the decimal point character in formatted numeric output.
     * @type {String}
     */
    decimalPoint: undefined,
    /*
     * The ExtendScript memory cache size, in bytes.
     * @type {Number}
     */
    memCache: undefined,
    /*
     * An array of objects containing information about the display screens attached to your computer.
     * @type {Object}
     */
    screens: undefined,
    /*
     * The current operating system version information.
     * @type {String}
     */
    os: undefined,
    /*
     * The file name of the current script.
     * @type {String}
     */
    fileName: undefined,
    /*
     * The current line number of the currently executing script.
     * @type {Number}
     */
    line: undefined,
    /*
     * A high-resolution timer, measuring the time in microseconds. The timer starts when ExtendScript isinitialized during the application startup sequence. Every read access resets the timer to Zero.
     * @type {Number}
     */
    hiresTimer: undefined,
    /*
     * The name of the current ExtendScript engine, if set.
     * @type {String}
     */
    engineName: undefined,
    /*
     * The path for include files for the current script.
     * @type {String}
     */
    includePath: undefined,
    /*
     * Shows an About box for the ExtendScript component, and returns the text for the box.
     * @returns {String}
     */
    about: function () {
        return new String();
    },
    /*
     * Converts this object to a string.
     * @returns {String}
     */
    toString: function () {
        return new String();
    },
    /*
     * Prints text to the Console.
   *
     * @param {any} text The text to print. All arguments are concatenated.
     */
    write: function (text) {
    },
    /*
     * Prints text to the Console, and adds a newline character.
   *
     * @param {any} text The text to print. All arguments are concatenated.
     */
    writeln: function (text) {
    },
    /*
     * Breaks execution at the current position.
   *
     * @param {any} [condition] A string containing a JavaScript statement to be used as a condition. If the statement evaluates to true or nonzero when this point is reached, execution stops.
     */
    bp: function (condition) {
    },
    /*
     * Retrieves the value of an environment variable.
   *
     * @param {String} name The name of the variable.
     * @returns {String}
     */
    getenv: function (name) {
        return new String();
    },
    /*
     * Sets the value of an environment variable.
   *
     * @param {String} name The name of the variable.
     * @param {String} value The value of the variable.
     */
    setenv: function (name, value) {
    },
    /*
     * Suspends the calling thread for a number of milliseconds.
   *
     * @param {Number} msecs Number of milliseconds to sleep.
     */
    sleep: function (msecs) {
    },
    /*
     * Invokes the platform-specific color selection dialog, and returns the selected color.
   *
     * @param {Number} color The color to be preselected in the dialog, as 0xRRGGBB, or -1 for the platform default.
     * @returns {Number}
     */
    colorPicker: function (color) {
        return new Number();
    },
    /*
     * Loads and evaluates a file.
   *
     * @param {File} file The file to load.
     * @param {Number} [timeout] An optional timeout in milliseconds.
     * @returns {any}
     */
    evalFile: function (file, timeout) {
        return new any();
    },
    /*
     * Initiates garbage collection in the ExtendScript engine.
     */
    gc: function () {
    },
};
/*
 * Creates and returns a new array.
 * @constructor
   *
 * @param {Number} length If no other parameters are passed, the initial length of the empty array.
 * @param {any} [element] If there is more than one parameter, the array is initialized with the given parameters.
 */
function Array(length, element) {
    /*
     * The length of the array
     * @type {Number}
     */
    this.length = undefined;
    /*
     * Returns a new array created by concatenating the given values to the end of the original array.
     *
     * @param {any} value Any number of values to be added to the end of the array.
     * @returns {Array}
     */
    this.concat = function (value) {
        return new Array();
    };
    /*
     * Joins all elements of the array into a string; optionally, each element is separated by delimiter.
     *
     * @param {String} [delimiter] A string used to separate each element of the array.
     * @returns {String}
     */
    this.join = function (delimiter) {
        return new String();
    };
    /*
     * Reverses the order of the elements in the array.
     * @returns {Array}
     */
    this.reverse = function () {
        return new Array();
    };
    /*
     * Creates a new array, which contains a subset of the original array's elements.
     * @returns {Array}
     */
    this.slice = function () {
        return new Array();
    };
    /*
     * Sorts the elements of the array in place, using the given function to compare to elements.
     *
     * @param {Function} userFunction A user-supplied function of the form userFunction(a, b) which returns less than 0 if a is greater than b, 0 if a and b are equal, and greater than 0 if b is greater than a.
     */
    this.sort = function (userFunction) {
    };
    /*
     * Removes the last element from the array, decreases the length by 1, and returns the value of the element.
     * @returns {any}
     */
    this.pop = function () {
        return new any();
    };
    /*
     * Places one or more values onto the end of the array and increases length by n.
     *
     * @param {Number} value Any number of values to be pushed onto the end of the array.
     * @returns {Number}
     */
    this.push = function (value) {
        return new Number();
    };
    /*
     * Removes num elements from the array beginning with index, start.
     *
     * @param {Number} start The index of the first element to remove. Negative values are relative to the end of the array.
     * @param {Number} [num] The number of array elements to remove, including start. If omitted, all elements from array index start to the end of the array are removed.
     * @param {any} [value] A list of one or more values to be added to the array starting at index start.
     * @returns {Array}
     */
    this.splice = function (start, num, value) {
        return new Array();
    };
    /*
     * Removes the first element from the array, decreases the length by 1, and returns the value of the element.
     * @returns {any}
     */
    this.shift = function () {
        return new any();
    };
    /*
     * Converts an array to a string and returns the string.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
    /*
     * Converts an array to a string and returns the string (localized).
     * @returns {String}
     */
    this.toLocaleString = function () {
        return new String();
    };
    /*
     * Adds one or more elements to the beginning of the array.
     *
     * @param {any} value The values of one or more elements to be added to the beginning of the array.
     * @returns {Number}
     */
    this.unshift = function (value) {
        return new Number();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toSource = function () {
        return new String();
    };
}
/*
 * Creates and returns a new Boolean object set to the value of the argument converted to a boolean.
 * @constructor
   *
 * @param {any} value The value to be converted to a Boolean.
 */
function Boolean(value) {
    /*
     * undefined
     * @returns {String}
     */
    this.toSource = function () {
        return new String();
    };
    /*
     * Returns the string representation of the value of bool.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
    /*
     * Returns the primitive value of bool.
     * @returns {Boolean}
     */
    this.valueOf = function () {
        return new Boolean();
    };
}
/*
 * Returns a new Date object holding the current date and time.
 * @constructor
   *
 * @param {Number} year The year expressed in four digits.
 * @param {Number} [month] An integer value from 0 (Jan) to 11 (Dec).
 * @param {Number} [day] An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.
 * @param {Number} [hours] An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.
 * @param {Number} [min] An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
 * @param {Number} [sec] An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
 * @param {Number} [ms] An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.
 */
function Date(year, month, day, hours, min, sec, ms) {
    /*
     * Parses a string, returning a new Date object. The string should be similar to the string returned bt toString().
     *
     * @param {String} text The string to parse.
     * @returns {Date}
     */
    this.parse = function (text) {
        return new Date();
    };
    /*
     * Returns the number of milliseconds between midnight January 1, 1970, UTC, and the specified time.
     *
     * @param {Number} year The year expressed in four digits, for example, 2001.
     * @param {Number} [month] An integer value from 0 (Jan) to 11 (Dec).
     * @param {Number} [day] An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.
     * @param {Number} [hours] An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.
     * @param {Number} [min] An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
     * @param {Number} [sec] An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
     * @param {Number} [ms] An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.
     * @returns {Date}
     */
    this.UTC = function (year, month, day, hours, min, sec, ms) {
        return new Date();
    };
    /*
     * Returns the day of the month of the specified Date object in local time.
     * @returns {Number}
     */
    this.getDate = function () {
        return new Number();
    };
    /*
     * Returns the day of the week for the specified Date object in local time.
     * @returns {Number}
     */
    this.getDay = function () {
        return new Number();
    };
    /*
     * Returns the year of the specified Date object, as a difference from 1900, in local time.
     * @returns {Number}
     */
    this.getYear = function () {
        return new Number();
    };
    /*
     * Returns the four digit year of the specified Date object in local time.
     * @returns {Number}
     */
    this.getFullYear = function () {
        return new Number();
    };
    /*
     * Returns the hour of the specified Date object in local time.
     * @returns {Number}
     */
    this.getHours = function () {
        return new Number();
    };
    /*
     * Returns the milliseconds of the specified Date object in local time.
     * @returns {Number}
     */
    this.getMilliseconds = function () {
        return new Number();
    };
    /*
     * Returns the minutes of the specified Date object in local time.
     * @returns {Number}
     */
    this.getMinutes = function () {
        return new Number();
    };
    /*
     * Returns the month of the specified Date object in local time.
     * @returns {Number}
     */
    this.getMonth = function () {
        return new Number();
    };
    /*
     * Returns the seconds of the specified Date object in local time.
     * @returns {Number}
     */
    this.getSeconds = function () {
        return new Number();
    };
    /*
     * Returns the number of milliseconds since midnight January 1,1970 UTC for the specified Date object.
     * @returns {Number}
     */
    this.getTime = function () {
        return new Number();
    };
    /*
     * Returns the difference in minutes between the computer's local time and UTC.
     * @returns {Number}
     */
    this.getTimezoneOffset = function () {
        return new Number();
    };
    /*
     * Returns the day of the month of the specified Date object according to UTC.
     * @returns {Number}
     */
    this.getUTCDate = function () {
        return new Number();
    };
    /*
     * Returns the day of the week for the specified Date object according to UTC.
     * @returns {Number}
     */
    this.getUTCDay = function () {
        return new Number();
    };
    /*
     * Returns the four digit year of the specified Date object according to UTC.
     * @returns {Number}
     */
    this.getUTCFullYear = function () {
        return new Number();
    };
    /*
     * Returns the hour of the specified Date object according to UTC.
     * @returns {Number}
     */
    this.getUTCHours = function () {
        return new Number();
    };
    /*
     * Returns the milliseconds of the specified Date object according to UTC.
     * @returns {Number}
     */
    this.getUTCMilliseconds = function () {
        return new Number();
    };
    /*
     * Returns the minutes of the specified Date object according to UTC.
     * @returns {Number}
     */
    this.getUTCMinutes = function () {
        return new Number();
    };
    /*
     * Returns the month of the specified Date object according to UTC.
     * @returns {Number}
     */
    this.getUTCMonth = function () {
        return new Number();
    };
    /*
     * Returns the seconds of the specified Date object according to UTC.
     * @returns {Number}
     */
    this.getUTCSeconds = function () {
        return new Number();
    };
    /*
     * Sets the day of the month of a specified Date object according to local time.
     *
     * @param {Number} date An integer from 1 to 31 indicating the day of the month.
     * @returns {Number}
     */
    this.setDate = function (date) {
        return new Number();
    };
    /*
     * Sets the year of a specified Date object according to local time.
     *
     * @param {Number} year A four-digit integer value indicating the year to set.
     * @returns {Number}
     */
    this.setFullYear = function (year) {
        return new Number();
    };
    /*
     * Sets the hours of a specified Date object according to local time.
     *
     * @param {Number} hour An integer value from 0 (midnight) to 23 (11 PM).
     * @returns {Number}
     */
    this.setHours = function (hour) {
        return new Number();
    };
    /*
     * Sets the milliseconds of a specified Date object according to local time.
     *
     * @param {Number} ms An integer value from 0 to 999.
     * @returns {Number}
     */
    this.setMilliseconds = function (ms) {
        return new Number();
    };
    /*
     * Sets the minutes of a specified Date object according to local time.
     *
     * @param {Number} minutes An integer value from 0 to 59.
     * @returns {Number}
     */
    this.setMinutes = function (minutes) {
        return new Number();
    };
    /*
     * Sets the seconds of a specified Date object according to local time.
     *
     * @param {Number} seconds An integer value from 0 to 59.
     * @returns {Number}
     */
    this.setSeconds = function (seconds) {
        return new Number();
    };
    /*
     * Sets the month of a specified Date object according to local time.
     *
     * @param {Number} month An integer value from 0 (Jan) to 11 (Dec).
     * @returns {Number}
     */
    this.setMonth = function (month) {
        return new Number();
    };
    /*
     * Sets the date of a specified Date object according to universal time.
     *
     * @param {Number} date An integer from 1 to 31 indicating the day of the month.
     * @returns {Number}
     */
    this.setUTCDate = function (date) {
        return new Number();
    };
    /*
     * Sets the year of a specified Date object according to UTC, can also set the month and date.
     *
     * @param {Number} year The year expressed in four digits.
     * @returns {Number}
     */
    this.setUTCFullYear = function (year) {
        return new Number();
    };
    /*
     * Sets the hours of a specified Date object according to UTC.
     *
     * @param {Number} hours An integer value from 0 (midnight) to 23 (11 PM) indicating the hour to be set.
     * @returns {Number}
     */
    this.setUTCHours = function (hours) {
        return new Number();
    };
    /*
     * Sets the milliseconds of a specified Date object according to UTC.
     *
     * @param {Number} ms An integer value in the range of 0 to 999 indicating the number of milliseconds to set.
     * @returns {Number}
     */
    this.setUTCMilliseconds = function (ms) {
        return new Number();
    };
    /*
     * Sets the minutes of a specified Date object according to UTC.
     *
     * @param {Number} min An integer value in the range 0 to 59 indicating the number of minutes to be set.
     * @returns {Number}
     */
    this.setUTCMinutes = function (min) {
        return new Number();
    };
    /*
     * Sets the seconds of a specified Date object according to UTC.
     *
     * @param {Number} sec An integer value in the range 0 to 59 indicating the number of seconds to set.
     * @returns {Number}
     */
    this.setUTCSeconds = function (sec) {
        return new Number();
    };
    /*
     * Sets the month of a specified Date object according to UTC.
     *
     * @param {Number} month An integer value in the range 0 (Jan.) to 11 (Dec.) indicating the month to set.
     * @returns {Number}
     */
    this.setUTCMonth = function (month) {
        return new Number();
    };
    /*
     * Sets the date of a specified Date object in milliseconds since midnight, January 1, 1970.
     *
     * @param {Number} ms An integer indicating the number of milliseconds between the date set and midnight, January 1, 1970.
     * @returns {Number}
     */
    this.setTime = function (ms) {
        return new Number();
    };
    /*
     * Sets the year of a specified Date object according to local time, as a difference between the current year and 1900.
     *
     * @param {Number} year An integer value indicating the year to set.
     * @returns {Number}
     */
    this.setYear = function (year) {
        return new Number();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toDateString = function () {
        return new String();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toTimeString = function () {
        return new String();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toLocaleString = function () {
        return new String();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toLocaleDateString = function () {
        return new String();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toLocaleTimeString = function () {
        return new String();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toGMTString = function () {
        return new String();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toUTCString = function () {
        return new String();
    };
    /*
     * Returns a string value representing the date and time stored in the Date object in human readable format.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
    /*
     * The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.
     * @returns {Number}
     */
    this.valueOf = function () {
        return new Number();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toSource = function () {
        return new String();
    };
}
/*
 * Creates a new Error object.
 * @constructor
   *
 * @param {String} msg The error message.
 * @param {String} [file] The name of the file.
 * @param {Number} [line] The line number.
 */
function Error(msg, file, line) {
    /*
     * The error message.
     * @type {String}
     */
    this.description = undefined;
    /*
     * Convert this object to a string.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toSource = function () {
        return new String();
    };
}
/*
 * Creates and returns a new File object referring to a given file system location.
 * @constructor
   *
 * @param {String} [path] The full or partial path name of the file,  in platform-specific or URI format.
 */
function File(path) {
    /*
     * The name of the file system.
     * @type {String}
     */
    this.fs = undefined;
    /*
     * If true, the object refers to a file system alias or shortcut.
     * @type {Boolean}
     */
    this.alias = undefined;
    /*
     * The creation date of the referenced file, or null if the object does not refer to a file on disk.
     * @type {Date}
     */
    this.created = undefined;
    /*
     * A string containing a message describing the most recent file system error.
     * @type {String}
     */
    this.error = undefined;
    /*
     * If true, this object refers to a file or file-system alias that actually exists in the file system.
     * @type {Boolean}
     */
    this.exists = undefined;
    /*
     * The platform-specific full path name for the referenced file.
     * @type {String}
     */
    this.fsName = undefined;
    /*
     * The full path name for the referenced file in URI notation.
     * @type {String}
     */
    this.fullName = undefined;
    /*
     * The full path name for the referenced file in URI notation.
     * @type {String}
     */
    this.absoluteURI = undefined;
    /*
     * The path name for the object in URI notation, relative to the current folder.
     * @type {String}
     */
    this.relativeURI = undefined;
    /*
     * The date of the referenced file's last modification, or null if the object does not refer to a file on the disk.
     * @type {Date}
     */
    this.modified = undefined;
    /*
     * The file name portion of the absolute URI for the referenced file, without the path specification.
     * @type {String}
     */
    this.name = undefined;
    /*
     * The localized name of the referenced file, without the path specification.
     * @type {String}
     */
    this.displayName = undefined;
    /*
     * The path portion of the absolute URI for the referenced file, without the file name.
     * @type {String}
     */
    this.path = undefined;
    /*
     * The Folder object for the folder that contains this file.
     * @type {Folder}
     */
    this.parent = undefined;
    /*
     * The file type as a four-character string.
     * @type {String}
     */
    this.type = undefined;
    /*
     * In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????".
     * @type {String}
     */
    this.creator = undefined;
    /*
     * When true, the file is not shown in the platform-specific file browser.
     * @type {Boolean}
     */
    this.hidden = undefined;
    /*
     * When true, prevents the file from being altered or deleted.
     * @type {Boolean}
     */
    this.readonly = undefined;
    /*
     * How line feed characters are written in the file system.
     * @type {String}
     */
    this.lineFeed = undefined;
    /*
     * The size of the file in bytes.
     * @type {Number}
     */
    this.length = undefined;
    /*
     * Gets or sets the encoding for subsequent read/write operations.
     * @type {String}
     */
    this.encoding = undefined;
    /*
     * When true, a read attempt caused the current position to be at the end of the file, or the file is not open.
     * @type {Boolean}
     */
    this.eof = undefined;
    /*
     * Encodes a string as required by RFC 2396, and returns the encoded string.
     *
     * @param {String} name The string to encode.
     * @returns {String}
     */
    this.encode = function (name) {
        return new String();
    };
    /*
     * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
     *
     * @param {String} uri The UTF-8 encoded string to decode.
     * @returns {String}
     */
    this.decode = function (uri) {
        return new String();
    };
    /*
     * Reports whether a given encoding is available.
     *
     * @param {String} name The encoding name.
     * @returns {Boolean}
     */
    this.isEncodingAvailable = function (name) {
        return new Boolean();
    };
    /*
     * Opens a dialog so the user can select one or more files to open.
     *
     * @param {String} prompt The prompt text, displayed if the dialog allows a prompt.
     * @param {any} [filter] A filter that limits the types of files displayed in the dialog.
     * @param {Boolean} [multiSelect] When true, the user can select multiple files and the return value is an array.
     * @returns {File}
     */
    this.openDialog = function (prompt, filter, multiSelect) {
        return new File();
    };
    /*
     * Opens a dialog so the user can select a file name to save to.
     *
     * @param {String} prompt The prompt text, displayed if the dialog allows a prompt.
     * @param {any} [filter] In Windows only, a filter that limits the types of files displayed in the dialog.
     * @returns {File}
     */
    this.saveDialog = function (prompt, filter) {
        return new File();
    };
    /*
     * Attempts to resolve the file-system alias or shortcut that this object refers to.
     * @returns {File}
     */
    this.resolve = function () {
        return new File();
    };
    /*
     * Renames the associated file.
     *
     * @param {String} newName The new file name, with no path information.
     * @returns {Boolean}
     */
    this.rename = function (newName) {
        return new Boolean();
    };
    /*
     * Deletes the file associated with this object from disk immediately, without moving it to the system trash.
     * @returns {Boolean}
     */
    this.remove = function () {
        return new Boolean();
    };
    /*
     * Changes the path specification of the referenced file.
     *
     * @param {String} path A string containing the new path, absolute or relative to the current folder.
     * @returns {Boolean}
     */
    this.changePath = function (path) {
        return new Boolean();
    };
    /*
     * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
     *
     * @param {String} basePath A base path in URI notation.
     * @returns {String}
     */
    this.getRelativeURI = function (basePath) {
        return new String();
    };
    /*
     * Executes or opens this file using the appropriate application, as if it had been double-clicked in a file browser.
     * @returns {Boolean}
     */
    this.execute = function () {
        return new Boolean();
    };
    /*
     * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file or files, and creates new File objects to represent the selected files.
     *
     * @param {String} prompt A string containing the prompt text, if the dialog allows a prompt.
     * @param {any} [filter] A filter that limits the types of files displayed in the dialog.
     * @param {Boolean} [multiSelect] When true, the user can select multiple files and the return value is an array.
     * @returns {File}
     */
    this.openDlg = function (prompt, filter, multiSelect) {
        return new File();
    };
    /*
     * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
     *
     * @param {String} prompt A string containing the prompt text, if the dialog allows a prompt.
     * @param {any} [filter] In Windows only, a filter that limits the types of files displayed in the dialog.
     * @returns {File}
     */
    this.saveDlg = function (prompt, filter) {
        return new File();
    };
    /*
     * Converts this object to a string.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
    /*
     * Creates and returns a serialized string representation of this object.
     * @returns {String}
     */
    this.toSource = function () {
        return new String();
    };
    /*
     * Makes this file a file-system alias or shortcut to the specified file.
     *
     * @param {String} path A string containing the path of the target file.
     */
    this.createAlias = function (path) {
    };
    /*
     * Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
     *
     * @param {String} mode The read-write mode, a single-character string.
     * @param {String} [type] In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.
     * @param {String} [creator] In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.
     * @returns {Boolean}
     */
    this.open = function (mode, type, creator) {
        return new Boolean();
    };
    /*
     * Closes this open file.
     * @returns {Boolean}
     */
    this.close = function () {
        return new Boolean();
    };
    /*
     * Reads the contents of the file, starting at the current position.
     *
     * @param {Number} [chars] An integer specifying the number of characters to read.
     * @returns {String}
     */
    this.read = function (chars) {
        return new String();
    };
    /*
     * Reads a single text character from the file at the current position.
     * @returns {String}
     */
    this.readch = function () {
        return new String();
    };
    /*
     * Reads a single line of text from the file at the current position.
     * @returns {String}
     */
    this.readln = function () {
        return new String();
    };
    /*
     * Writes the specified text to the file at the current position.
     *
     * @param {String} text A text string to be written.
     * @returns {Boolean}
     */
    this.write = function (text) {
        return new Boolean();
    };
    /*
     * Writes a string to the file at the current position and appends a line-feed sequence.
     *
     * @param {String} text A text string to be written.
     * @returns {Boolean}
     */
    this.writeln = function (text) {
        return new Boolean();
    };
    /*
     * Seeks to a given position in the file.
     *
     * @param {Number} pos undefined
     * @param {Number} [mode] The seek mode.
     * @returns {Boolean}
     */
    this.seek = function (pos, mode) {
        return new Boolean();
    };
    /*
     * Retrieves the current position as a byte offset from the start of the file.
     * @returns {Number}
     */
    this.tell = function () {
        return new Number();
    };
    /*
     * Copies this object’s referenced file to the specified target location.
     *
     * @param {undefined} target A string with the URI path to the target location, or a File object that references the target location.
     * @returns {Boolean}
     */
    this.copy = function (target) {
        return new Boolean();
    };
}
/*
 * Creates and returns a new Folder object referring to a given file-system location.
 * @constructor
   *
 * @param {String} [path] The absolute or relative path to the folder associated with this object, specified in URI format.
 */
function Folder(path) {
    /*
     * The name of the current file system.
     * @type {String}
     */
    this.fs = undefined;
    /*
     * A Folder object for the current folder.
     * @type {Folder}
     */
    this.current = undefined;
    /*
     * A Folder object for the folder containing the executable image of the running application.
     * @type {Folder}
     */
    this.startup = undefined;
    /*
     * In Mac OS, a Folder object for the folder containing the bundle of the running application.
     * @type {Folder}
     */
    this.appPackage = undefined;
    /*
     * A Folder object for the folder containing the operating system files.
     * @type {Folder}
     */
    this.system = undefined;
    /*
     * A Folder object for the folder containing deleted items. On Windows, the trash folder is a virtualfolder containing a database; therefore, the property value is null on Windows.
     * @type {Folder}
     */
    this.trash = undefined;
    /*
     * A Folder object for the default folder for temporary files.
     * @type {Folder}
     */
    this.temp = undefined;
    /*
     * A Folder object for the folder containing the user's application data.
     * @type {Folder}
     */
    this.userData = undefined;
    /*
     * The folder containing the application data for all users.
     * @type {Folder}
     */
    this.appData = undefined;
    /*
     * A Folder object for the folder containing common files for all programs installed by the user.
     * @type {Folder}
     */
    this.commonFiles = undefined;
    /*
     * A folder pointing to the user's My Documents folder.
     * @type {Folder}
     */
    this.myDocuments = undefined;
    /*
     * A Folder object for the folder that contains the user’s desktop.
     * @type {Folder}
     */
    this.desktop = undefined;
    /*
     * When true, the object refers to a file system alias or shortcut.
     * @type {Boolean}
     */
    this.alias = undefined;
    /*
     * The creation date of the referenced folder, or null if the object does not refer to a folder on disk.
     * @type {Date}
     */
    this.created = undefined;
    /*
     * A message describing the most recent file system error.
     * @type {String}
     */
    this.error = undefined;
    /*
     * When true, this object refers to a folder that currently exists in the file system.
     * @type {Boolean}
     */
    this.exists = undefined;
    /*
     * The platform-specific name of the referenced folder as a full path name.
     * @type {String}
     */
    this.fsName = undefined;
    /*
     * The full path name for the referenced folder in URI notation. .
     * @type {String}
     */
    this.fullName = undefined;
    /*
     * The full path name for the referenced folder in URI notation.
     * @type {String}
     */
    this.absoluteURI = undefined;
    /*
     * The path name for the referenced folder in URI notation, relative to the current folder.
     * @type {String}
     */
    this.relativeURI = undefined;
    /*
     * The date of the referenced folder's last modification, or null if the object does not refer to a folder on disk.
     * @type {Date}
     */
    this.modified = undefined;
    /*
     * The folder name portion of the absolute URI for the referenced file, without the path specification.
     * @type {String}
     */
    this.name = undefined;
    /*
     * The localized name portion of the absolute URI for the referenced folder, without the path specification.
     * @type {String}
     */
    this.displayName = undefined;
    /*
     * The path portion of the object absolute URI for the referenced file, without the folder name.
     * @type {String}
     */
    this.path = undefined;
    /*
     * TThe Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume.
     * @type {Folder}
     */
    this.parent = undefined;
    /*
     * Encodes a string as required by RFC 2396, and returns the encoded string.
     *
     * @param {String} name The string to encode.
     * @returns {String}
     */
    this.encode = function (name) {
        return new String();
    };
    /*
     * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
     *
     * @param {String} uri The UTF-8 string to decode.
     * @returns {String}
     */
    this.decode = function (uri) {
        return new String();
    };
    /*
     * Reports whether a given encoding is available.
     *
     * @param {String} name The encoding name.
     * @returns {Boolean}
     */
    this.isEncodingAvailable = function (name) {
        return new Boolean();
    };
    /*
     * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
     *
     * @param {String} prompt The prompt text, if the dialog allows a prompt.
     * @returns {Folder}
     */
    this.selectDialog = function (prompt) {
        return new Folder();
    };
    /*
     * Attempts to resolve the file-system alias or shortcut that this object refers to.
     * @returns {Folder}
     */
    this.resolve = function () {
        return new Folder();
    };
    /*
     * Renames the associated folder.
     *
     * @param {String} newName The new folder name, with no path information.
     * @returns {Boolean}
     */
    this.rename = function (newName) {
        return new Boolean();
    };
    /*
     * Deletes the folder associated with this object from disk immediately, without moving it to the system trash.
     * @returns {Boolean}
     */
    this.remove = function () {
        return new Boolean();
    };
    /*
     * Changes the path specification of the referenced folder.
     *
     * @param {String} path A string containing the new path, absolute or relative to the current folder.
     * @returns {Boolean}
     */
    this.changePath = function (path) {
        return new Boolean();
    };
    /*
     * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
     *
     * @param {String} [basePath] A base path in URI notation.
     * @returns {String}
     */
    this.getRelativeURI = function (basePath) {
        return new String();
    };
    /*
     * Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
     * @returns {Boolean}
     */
    this.execute = function () {
        return new Boolean();
    };
    /*
     * Converts this object to a string.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
    /*
     * Creates and returns a serialized string representation of this object.
     * @returns {String}
     */
    this.toSource = function () {
        return new String();
    };
    /*
     * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
     *
     * @param {String} prompt The prompt text, if the dialog allows a prompt.
     * @returns {Folder}
     */
    this.selectDlg = function (prompt) {
        return new Folder();
    };
    /*
     * Retrieves the contents of this folder, filtered by the supplied mask.
     *
     * @param {any} mask A search mask for file names, specified as a string or a function.
     * @returns {Array}
     */
    this.getFiles = function (mask) {
        return new Array();
    };
    /*
     * undefined
     * @returns {Boolean}
     */
    this.create = function () {
        return new Boolean();
    };
}
/*
 * undefined
 * @constructor
   *
 * @param {String} arguments The list of formal arguments, separated by commas.
 * @param {String} body The body of the function to create.
 */
function Function(arguments, body) {
    /*
     * The function arguments, packed into an array.
     * @type {Object}
     */
    this.arguments = undefined;
    /*
     * The number of formal arguments.
     * @type {Number}
     */
    this.length = undefined;
    /*
     * The number of formal arguments.
     * @type {Number}
     */
    this.arity = undefined;
    /*
     * The function name.
     * @type {String}
     */
    this.name = undefined;
    /*
     * undefined
     *
     * @param {Object} thisObj undefined
     * @param {Array} args An array of arguments.
     * @returns {any}
     */
    this.apply = function (thisObj, args) {
        return new any();
    };
    /*
     * undefined
     *
     * @param {Object} thisObj undefined
     * @param {any} argument undefined
     * @returns {any}
     */
    this.call = function (thisObj, argument) {
        return new any();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toSource = function () {
        return new String();
    };
    /*
     * Returns the function definition as a string.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
}
/*
 * A global object containing a set of math functions and constants.
 */
var Math = {
    /*
     * Euler's constant and the base of natural logarithms.
     * @type {Number}
     */
    E: undefined,
    /*
     * The natural logarithm of 10.
     * @type {Number}
     */
    LN10: undefined,
    /*
     * The natural logarithm of 2.
     * @type {Number}
     */
    LN2: undefined,
    /*
     * The base 2 logarithm of e.
     * @type {Number}
     */
    LOG2E: undefined,
    /*
     * The base 10 logarithm of e.
     * @type {Number}
     */
    LOG10E: undefined,
    /*
     * The ratio of the circumference of a circle to its diameter.
     * @type {Number}
     */
    PI: undefined,
    /*
     * The reciprocal of the square root of 1/2.
     * @type {Number}
     */
    SQRT1_2: undefined,
    /*
     * The square root of 2.
     * @type {Number}
     */
    SQRT2: undefined,
    /*
     * Returns the absolute value of a number.
   *
     * @param {Number} x A number.
     * @returns {Number}
     */
    abs: function (x) {
        return new Number();
    },
    /*
     * Returns the arc cosine(in radians) of a number.
   *
     * @param {Number} x A number.
     * @returns {Number}
     */
    acos: function (x) {
        return new Number();
    },
    /*
     * Returns the arc sin(in radians) of a number.
   *
     * @param {Number} x A number.
     * @returns {Number}
     */
    asin: function (x) {
        return new Number();
    },
    /*
     * Returns the arc tangent(in radians) of a number.
   *
     * @param {Number} x A number.
     * @returns {Number}
     */
    atan: function (x) {
        return new Number();
    },
    /*
     * Returns the arc tangent of the quotient of its arguments (y/x).
   *
     * @param {Number} y A number.
     * @param {Number} x A number.
     * @returns {Number}
     */
    atan2: function (y, x) {
        return new Number();
    },
    /*
     * Rounds the number up to the nearest integer.
   *
     * @param {Number} x A number.
     * @returns {Number}
     */
    ceil: function (x) {
        return new Number();
    },
    /*
     * Returns the cosine of an angle provided in radians.
   *
     * @param {Number} x An angle, in radians.
     * @returns {Number}
     */
    cos: function (x) {
        return new Number();
    },
    /*
     * Returns Math.E raised to the power of a number.
   *
     * @param {Number} x A number.
     * @returns {Number}
     */
    exp: function (x) {
        return new Number();
    },
    /*
     * Rounds a number down to the nearest integer.
   *
     * @param {Number} x A number.
     * @returns {Number}
     */
    floor: function (x) {
        return new Number();
    },
    /*
     * Returns the natural logarithm of a number.
   *
     * @param {Number} x A number.
     * @returns {Number}
     */
    log: function (x) {
        return new Number();
    },
    /*
     * Returns the largest of zero or more numbers.
   *
     * @param {Number} value1, value2, ... Numbers.
     * @returns {Number}
     */
    max: function (value1, value2) {
        return new Number();
    },
    /*
     * Returns the smallest of zero or more numbers.
   *
     * @param {Number} value1, value2, ... Numbers.
     * @returns {Number}
     */
    min: function (value1, value2) {
        return new Number();
    },
    /*
     * Returns x raised to the power of y.
   *
     * @param {Number} x Numbers.
     * @param {Number} y undefined
     * @returns {Number}
     */
    pow: function (x, y) {
        return new Number();
    },
    /*
     * Returns a pseudo-random number from 0.0 up to but not including 1.0.
     * @returns {Number}
     */
    random: function () {
        return new Number();
    },
    /*
     * Rounds a number to the nearest integer.
   *
     * @param {Number} x A number.
     * @returns {Number}
     */
    round: function (x) {
        return new Number();
    },
    /*
     * Returns the sine of an angle provided in radians.
   *
     * @param {Number} x An angle, in radians.
     * @returns {Number}
     */
    sin: function (x) {
        return new Number();
    },
    /*
     * Returns the square root of a number.
   *
     * @param {Number} x A number.
     * @returns {Number}
     */
    sqrt: function (x) {
        return new Number();
    },
    /*
     * Returns the tangent of an angle provided in radians.
   *
     * @param {Number} x An angle, in radians.
     * @returns {Number}
     */
    tan: function (x) {
        return new Number();
    },
};
/*
 * Creates a Namespace object.
 * @constructor
   *
 * @param {any} prefix undefined
 * @param {String} [uri] The URI if the prefix is specified as a string.
 */
function Namespace(prefix, uri) {
    /*
     * The named prefix.
     * @type {String}
     */
    this.prefix = undefined;
    /*
     * The URI.
     * @type {String}
     */
    this.uri = undefined;
}
/*
 * Returns a new Number object set to the value of the argument converted to a number.
 * @constructor
   *
 * @param {any} value The value of the object being created.
 */
function Number(value) {
    /*
     * A constant representing the smallest representable number.
     * @type {Number}
     */
    this.MIN_VALUE = undefined;
    /*
     * A constant representing the largest representable number.
     * @type {Number}
     */
    this.MAX_VALUE = undefined;
    /*
     * A constant representing the special "Not a Number" value.
     * @type {Number}
     */
    this.NaN = undefined;
    /*
     * A constant representing negative infinity.
     * @type {Number}
     */
    this.NEGATIVE_INFINITY = undefined;
    /*
     * A constant representing positive infinity.
     * @type {Number}
     */
    this.POSITIVE_INFINITY = undefined;
    /*
     * undefined
     * @returns {Number}
     */
    this.toSource = function () {
        return new Number();
    };
    /*
     * Returns the value of a Number object converted to a string.
     *
     * @param {Number} [radix] The optional conversion radix.
     * @returns {Number}
     */
    this.toString = function (radix) {
        return new Number();
    };
    /*
     * Returns the value of a Number object converted to a string, using localized conventions.
     * @returns {Number}
     */
    this.toLocaleString = function () {
        return new Number();
    };
    /*
     * Converts the Number object to a string with fixed decimals.
     *
     * @param {Number} decimals The number of decimals.
     * @returns {Number}
     */
    this.toFixed = function (decimals) {
        return new Number();
    };
    /*
     * Converts the Number object to a string in scientific notation.
     *
     * @param {Number} decimals The number of decimals.
     * @returns {Number}
     */
    this.toExponential = function (decimals) {
        return new Number();
    };
    /*
     * Converts the Number object to a string in either scientific or fixed notation, epending on its value.
     *
     * @param {Number} decimals The number of decimals.
     * @returns {Number}
     */
    this.toPrecision = function (decimals) {
        return new Number();
    };
    /*
     * Returns the value of a Number object as a primitive number.
     * @returns {Number}
     */
    this.valueOf = function () {
        return new Number();
    };
}
/*
 * Creates and returns a new object of a given type.
 * @constructor
   *
 * @param {any} what The object type.
 */
function Object(what) {
    /*
     * Points to the prototype object for this object.
     * @type {Object}
     */
    this.prototype = undefined;
    /*
     * Points to the constructor function that created this object.
     * @type {Function}
     */
    this.constructor = undefined;
    /*
     * Retrieves and returns the Reflection object associated with this method or a property.
     * @type {Reflection}
     */
    this.reflect = undefined;
    /*
     * Reports whether an object is still valid.
     *
     * @param {Object} what The object to check.
     * @returns {Boolean}
     */
    this.isValid = function (what) {
        return new Boolean();
    };
    /*
     * Creates and returns a string representing this object.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toLocaleString = function () {
        return new String();
    };
    /*
     * Reports whether a given property is defined with an instance or within the prototype chain.
     *
     * @param {String} name The name of the property to check.
     * @returns {Boolean}
     */
    this.hasOwnProperty = function (name) {
        return new Boolean();
    };
    /*
     * Reports whether a given property is enumerable.
     *
     * @param {String} name The name of the property to check.
     * @returns {Boolean}
     */
    this.propertyIsEnumerable = function (name) {
        return new Boolean();
    };
    /*
     * Checks whether the given object is a prototype of this object.
     *
     * @param {Object} what The object to check.
     * @returns {Boolean}
     */
    this.isPrototypeOf = function (what) {
        return new Boolean();
    };
    /*
     * Retrieves and returns the primitive value of this object.
     * @returns {Object}
     */
    this.valueOf = function () {
        return new Object();
    };
    /*
     * Creates and returns a string representation of this object.
     * @returns {String}
     */
    this.toSource = function () {
        return new String();
    };
    /*
     * Removes the watch function of a property.
     *
     * @param {String} name The name of the property to unwatch.
     */
    this.unwatch = function (name) {
    };
    /*
     * Adds a watch function to a property, which is called when the value changes.
     *
     * @param {String} name The name of the property to watch.
     * @param {Function} func The function to be called when the value of this property changes.
     */
    this.watch = function (name, func) {
    };
}
/*
 * Creates a QName object.
 * @constructor
   *
 * @param {any} uri undefined
 * @param {String} [name] The local name. Used only if URI is given as a string.
 */
function QName(uri, name) {
    /*
     * The URI part of the qualified name.
     * @type {String}
     */
    this.uri = undefined;
    /*
     * The local name part of the qualified name.
     * @type {String}
     */
    this.localName = undefined;
}
/*
 * Provides information about a class.
 */
var Reflection = {
    /*
     * The class name.
     * @type {String}
     */
    name: undefined,
    /*
     * An array of method descriptions.
     * @type {ReflectionInfo}
     */
    methods: undefined,
    /*
     * An array of property descriptions.
     * @type {ReflectionInfo}
     */
    properties: undefined,
    /*
     * An array of class method descriptions.
     * @type {ReflectionInfo}
     */
    staticMethods: undefined,
    /*
     * An array of class property descriptions.
     * @type {ReflectionInfo}
     */
    staticProperties: undefined,
    /*
     * The long description text.
     * @type {String}
     */
    description: undefined,
    /*
     * The short description text.
     * @type {String}
     */
    help: undefined,
    /*
     * Sample code, if present.
     * @type {String}
     */
    sampleCode: undefined,
    /*
     * A file containing sample code. May be null.
     * @type {File}
     */
    sampleFile: undefined,
    /*
     * Finds an element description by name.
   *
     * @param {String} name The name of the element to find.
     * @returns {ReflectionInfo}
     */
    find: function (name) {
        return new ReflectionInfo();
    },
    /*
     * Returns this class information as XML in OMV format.
     * @returns {XML}
     */
    toXML: function () {
        return new XML();
    },
};
/*
 * Provides information about a method, a property or a method parameters.
 */
var ReflectionInfo = {
    /*
     * The class object that this element belongs to.
     * @type {Reflection}
     */
    parent: undefined,
    /*
     * The element name.
     * @type {String}
     */
    name: undefined,
    /*
     * The element type.
     * @type {String}
     */
    type: undefined,
    /*
     * The data type.
     * @type {String}
     */
    dataType: undefined,
    /*
     * The description of method or function arguments.
     * @type {ReflectionInfo}
     */
    arguments: undefined,
    /*
     * The minimum value.
     * @type {Number}
     */
    min: undefined,
    /*
     * The maximum value.
     * @type {Number}
     */
    max: undefined,
    /*
     * The default value.
     * @type {any}
     */
    defaultValue: undefined,
    /*
     * Contains true if the class describes a collection class.
     * @type {Boolean}
     */
    isCollection: undefined,
    /*
     * The long description text.
     * @type {String}
     */
    description: undefined,
    /*
     * The short description text.
     * @type {String}
     */
    help: undefined,
    /*
     * Sample code, if present.
     * @type {String}
     */
    sampleCode: undefined,
    /*
     * A file containing sample code. May be null.
     * @type {File}
     */
    sampleFile: undefined,
};
/*
 * Creates and returns a new RegExp object set to the value of the argument converted to a regular expression.
 * @constructor
   *
 * @param {String} pattern The pattern to convert.
 * @param {String} [flags] Flags that control how the conversion is performed.
 */
function RegExp(pattern, flags) {
    /*
     * The matched subexpression &#35;1.
     * @type {String}
     */
    this.$1 = undefined;
    /*
     * The matched subexpression &#35;2.
     * @type {String}
     */
    this.$2 = undefined;
    /*
     * The matched subexpression &#35;3.
     * @type {String}
     */
    this.$3 = undefined;
    /*
     * The matched subexpression &#35;4.
     * @type {String}
     */
    this.$4 = undefined;
    /*
     * The matched subexpression &#35;5.
     * @type {String}
     */
    this.$5 = undefined;
    /*
     * The matched subexpression &#35;6.
     * @type {String}
     */
    this.$6 = undefined;
    /*
     * The matched subexpression &#35;7.
     * @type {String}
     */
    this.$7 = undefined;
    /*
     * The matched subexpression &#35;8.
     * @type {String}
     */
    this.$8 = undefined;
    /*
     * The matched subexpression &#35;9.
     * @type {String}
     */
    this.$9 = undefined;
    /*
     * The last match.
     * @type {String}
     */
    this.lastMatch = undefined;
    /*
     * The value of the last matched subexpression.
     * @type {String}
     */
    this.lastParen = undefined;
    /*
     * The string before the match.
     * @type {String}
     */
    this.leftContext = undefined;
    /*
     * The string after the match.
     * @type {String}
     */
    this.rightContext = undefined;
    /*
     * Indicates whether the match is a global match.
     * @type {Boolean}
     */
    this.global = undefined;
    /*
     * Indicates whether the match is not case sensitive.
     * @type {Boolean}
     */
    this.ignoreCase = undefined;
    /*
     * Indicates whether the match matches multiple lines.
     * @type {Boolean}
     */
    this.multiline = undefined;
    /*
     * The original input string.
     * @type {String}
     */
    this.input = undefined;
    /*
     * Converts this RegExp object to a string.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
    /*
     * Compiles a string to a regular expression. Returns true if the compilation was successful.
     *
     * @param {String} pattern The pattern to compile.
     * @returns {Boolean}
     */
    this.compile = function (pattern) {
        return new Boolean();
    };
    /*
     * Execute a regular expression.
     *
     * @param {String} text The string to match.
     * @returns {Array}
     */
    this.exec = function (text) {
        return new Array();
    };
    /*
     * Execute a regular expression, and return true if there is a match.
     *
     * @param {String} text The string to match.
     * @returns {Boolean}
     */
    this.test = function (text) {
        return new Boolean();
    };
}
/*
 * Creates a new Socket object.
 * @constructor
 */
function Socket() {
    /*
     * The name of the remote computer when a connection is established.
     * @type {String}
     */
    this.host = undefined;
    /*
     * Sets or retrieves the name of the encoding used to transmit data.
     * @type {String}
     */
    this.encoding = undefined;
    /*
     * A message describing the most recent error. Setting this value clears any error message.
     * @type {String}
     */
    this.error = undefined;
    /*
     * When true, the receive buffer is empty.
     * @type {Boolean}
     */
    this.eof = undefined;
    /*
     * When true, the connection is active.
     * @type {Boolean}
     */
    this.connected = undefined;
    /*
     * The timeout in seconds to be applied to read or write operations.
     * @type {Number}
     */
    this.timeout = undefined;
    /*
     * Opens the connection for subsequent read/write operations.
     *
     * @param {String} host The server to connect to.
     * @param {String} [encoding] The encoding to be used for the connection
     * @returns {Boolean}
     */
    this.open = function (host, encoding) {
        return new Boolean();
    };
    /*
     * Instructs the object to start listening for an incoming connection.
     *
     * @param {Number} port The TCP/IP port number to listen on.
     * @param {String} [encoding] The encoding to be used for the connection
     * @returns {Boolean}
     */
    this.listen = function (port, encoding) {
        return new Boolean();
    };
    /*
     * Terminates the open connection.
     * @returns {Boolean}
     */
    this.close = function () {
        return new Boolean();
    };
    /*
     * Reads up to the specified number of characters from the connection. CR characters are ignored unless the encoding is set to "BINARY".
     *
     * @param {Number} [count] The number of characters to read.
     * @returns {String}
     */
    this.read = function (count) {
        return new String();
    };
    /*
     * Reads one line of text up to the next line feed.
     * @returns {String}
     */
    this.readln = function () {
        return new String();
    };
    /*
     * Concatenates all arguments into a single string and writes that string to the connection.
     *
     * @param {String} text Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
     * @returns {Boolean}
     */
    this.write = function (text) {
        return new Boolean();
    };
    /*
     * Concatenates all arguments into a single string, appends a LF character, and writes that string to the connection.
     *
     * @param {String} text Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
     * @returns {Boolean}
     */
    this.writeln = function (text) {
        return new Boolean();
    };
    /*
     * Checks a listening object for a new incoming connection.
     * @returns {Socket}
     */
    this.poll = function () {
        return new Socket();
    };
}
/*
 * Returns a string representation of the value given as an argument.
 * @constructor
   *
 * @param {any} value A number, variable, or object to convert to a string.
 */
function String(value) {
    /*
     * The length of the string.
     * @type {Number}
     */
    this.length = undefined;
    /*
     * Returns a string created by concatenation one or more characters specified as ASCII values.
     *
     * @param {Number} value1 One or more ASCII values.
     * @returns {String}
     */
    this.fromCharCode = function (value1) {
        return new String();
    };
    /*
     * Returns itself.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
    /*
     * undefined
     * @returns {String}
     */
    this.toSource = function () {
        return new String();
    };
    /*
     * Returns itself.
     * @returns {String}
     */
    this.valueOf = function () {
        return new String();
    };
    /*
     * Returns the character at the specified index.
     *
     * @param {Number} index An integer between 0 and string.length -1, specifying the character to return.
     * @returns {String}
     */
    this.charAt = function (index) {
        return new String();
    };
    /*
     * Returns the Unicode value of the character at the given index.
     *
     * @param {Number} index An integer between 0 and string.length -1, specifying the character.
     * @returns {Number}
     */
    this.charCodeAt = function (index) {
        return new Number();
    };
    /*
     * If necessary, converts the one or more given values to strings.
     *
     * @param {String} value The values to be concatenated with the given string.
     * @returns {String}
     */
    this.concat = function (value) {
        return new String();
    };
    /*
     * Returns the index within the string of the first occurrence of the specified string, starting the search at fromIndex if provided.
     *
     * @param {String} searchValue The string for which to search.
     * @param {Number} [offset] The starting offset of the search.
     * @returns {Number}
     */
    this.indexOf = function (searchValue, offset) {
        return new Number();
    };
    /*
     * Returns the index within the string of the last occurrence of the specified value.
     *
     * @param {String} searchValue The string for which to search.
     * @param {Number} [offset] The starting offset of the search.
     * @returns {Number}
     */
    this.lastIndexOf = function (searchValue, offset) {
        return new Number();
    };
    /*
     * Extracts a substring of the given string and returns it as a new string.
     *
     * @param {Number} startSlice The index at which to begin extraction.
     * @param {Number} [endSlice] The index at which to end extraction.
     * @returns {String}
     */
    this.slice = function (startSlice, endSlice) {
        return new String();
    };
    /*
     * Returns a new string which contains all the characters of the original string converted to lowercase.
     * @returns {String}
     */
    this.toLowerCase = function () {
        return new String();
    };
    /*
     * Returns a new string which contains all the characters of the original string converted to uppercase.
     * @returns {String}
     */
    this.toUpperCase = function () {
        return new String();
    };
    /*
     * Returns a new string which contains all the characters of the original string converted to lowercase (localized).
     * @returns {String}
     */
    this.toLocaleLowerCase = function () {
        return new String();
    };
    /*
     * Returns a new string which contains all the characters of the original string converted to uppercase (localized).
     * @returns {String}
     */
    this.toLocaleUpperCase = function () {
        return new String();
    };
    /*
     * Performs a localized comparison of two strings.
     *
     * @param {String} what The string to compare with.
     * @returns {Number}
     */
    this.localeCompare = function (what) {
        return new Number();
    };
    /*
     * Matches a string against a regular expression.
     *
     * @param {RegExp} regexp The regular expression to use.
     * @returns {Array}
     */
    this.match = function (regexp) {
        return new Array();
    };
    /*
     * undefined
     *
     * @param {any} what undefined
     * @param {String} with undefined
     * @returns {String}
     */
    this.replace = function (what, withs) {
        return new String();
    };
    /*
     * undefined
     *
     * @param {RegExp} search undefined
     * @returns {Number}
     */
    this.search = function (search) {
        return new Number();
    };
    /*
     * Splits a string into a group of substrings, places those strings in an array, and returns the array.
     *
     * @param {String} delimiter Specifies the string to use for delimiting.
     * @param {Number} limit undefined
     * @returns {String}
     */
    this.split = function (delimiter, limit) {
        return new String();
    };
    /*
     * Returns a string containing the characters beginning at the specified index, start, through the specified number of characters.
     *
     * @param {Number} start Location at which to begin extracting characters.
     * @param {Number} [length]  The number of characters to extract.
     * @returns {String}
     */
    this.substr = function (start, length) {
        return new String();
    };
    /*
     * Returns a substring of the given string by extracting characters from indexA up to but not including indexB.
     *
     * @param {Number} indexA The index to begin extracting.
     * @param {Number} [indexB]  The index at which to end extraction.
     * @returns {String}
     */
    this.substring = function (indexA, indexB) {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;a&gt;tag.
     *
     * @param {String} name The text to be stored in the anchors' name attribute.
     * @returns {String}
     */
    this.anchor = function (name) {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;big&gt;tag.
     * @returns {String}
     */
    this.big = function () {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;blink&gt;tag.
     * @returns {String}
     */
    this.blink = function () {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;b&gt;tag.
     * @returns {String}
     */
    this.bold = function () {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;tt&gt;tag.
     * @returns {String}
     */
    this.fixed = function () {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;font&gt;tag.
     *
     * @param {String} color The value to be stored in the tag's color attribute.
     * @returns {String}
     */
    this.fontcolor = function (color) {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;font&gt;tag.
     *
     * @param {Number} size The value to be stored in the tag's size attribute.
     * @returns {String}
     */
    this.fontsize = function (size) {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;i&gt;tag.
     * @returns {String}
     */
    this.italics = function () {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;a&gt;tag.
     *
     * @param {String} href The value to be stored in the tag's href attribute.
     * @returns {String}
     */
    this.link = function (href) {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;small&gt;tag.
     * @returns {String}
     */
    this.small = function () {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;strike&gt;tag.
     * @returns {String}
     */
    this.strike = function () {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;sub&gt;tag.
     * @returns {String}
     */
    this.sub = function () {
        return new String();
    };
    /*
     * Returns a string consisting of this string enclosed in a&lt;sup&gt;tag.
     * @returns {String}
     */
    this.sup = function () {
        return new String();
    };
}
/*
 * Represents a measurement as a combination of values and unit.
 */
var UnitValue = {
    /*
     * The base unit for all conversions.
     * @type {UnitValue}
     */
    baseUnit: undefined,
    /*
     * The unit name.
     * @type {String}
     */
    type: undefined,
    /*
     * The numeric value.
     * @type {Number}
     */
    value: undefined,
    /*
     * The base unit.
     * @type {UnitValue}
     */
    baseUnit: undefined,
    /*
     * Converts this instance to a different unit.
   *
     * @param {String} unitName The unit name.
     * @returns {any}
     */
    convert: function (unitName) {
        return new any();
    },
    /*
     * Returns this instance as a different unit.
   *
     * @param {String} unitName The unit name.
     * @returns {UnitValue}
     */
    as: function (unitName) {
        return new UnitValue();
    },
};
/*
 * Parses an XML string. Throws an error if the XML is incorrect.
 * @constructor
   *
 * @param {String} text The text to parse.
 */
function XML(text) {
    /*
     * Controls whether XML comments should be parsed (false) or ignored (true).
     * @type {Boolean}
     */
    this.ignoreComments = undefined;
    /*
     * Controls whether XML preprocessing instructions should be parsed (false) or ignored (true).
     * @type {Boolean}
     */
    this.ignoreProcessingInstructions = undefined;
    /*
     * Controls whether whitespace should be parsed (false) or ignored (true).
     * @type {Boolean}
     */
    this.ignoreWhitespace = undefined;
    /*
     * When true, XML is pretty-printed when converting to a string.
     * @type {Boolean}
     */
    this.prettyPrinting = undefined;
    /*
     * The number of spaces used to indent pretty-printed XML.
     * @type {Number}
     */
    this.prettyIndent = undefined;
    /*
     * Returns an object containing the current parsing and print settings for XML.
     * @returns {Object}
     */
    this.settings = function () {
        return new Object();
    };
    /*
     * undefined
     *
     * @param {Object} obj The object containing the settings to set.
     */
    this.setSettings = function (obj) {
    };
    /*
     * Returns an object containing the default parsing and print settings for XML.
     * @returns {Object}
     */
    this.defaultSettings = function () {
        return new Object();
    };
    /*
     * Adds a namespace declaration to the node. Returns the XML object itself.
     *
     * @param {Namespace} namespace The namespace to add.
     * @returns {XML}
     */
    this.addNamespace = function (namespace) {
        return new XML();
    };
    /*
     * Appends the given XML to this XML as a child. Returns the XML object itself.
     *
     * @param {XML} child The child XML to add.
     * @returns {XML}
     */
    this.appendChild = function (child) {
        return new XML();
    };
    /*
     * Returns a list containing all attribute elements matching the given name.
     *
     * @param {String} name The attribute name to look for.
     * @returns {XML}
     */
    this.attribute = function (name) {
        return new XML();
    };
    /*
     * Returns a list containing all attribute elements.
     * @returns {XML}
     */
    this.attributes = function () {
        return new XML();
    };
    /*
     * Returns a list containing all children of this XML matching the given element name.
     *
     * @param {String} name The name or the index of the child element.
     * @returns {XML}
     */
    this.child = function (name) {
        return new XML();
    };
    /*
     * Returns a number representing the ordinal position of this XML object within the context of its parent.
     * @returns {Number}
     */
    this.childIndex = function () {
        return new Number();
    };
    /*
     * Returns an XML object containing all the properties of this XML object in order.
     * @returns {XML}
     */
    this.children = function () {
        return new XML();
    };
    /*
     * Returns an XML object containing the properties of this XML object that represent XML comments.
     * @returns {XML}
     */
    this.comments = function () {
        return new XML();
    };
    /*
     * Checks if this XML object contains the given XML object.
     *
     * @param {XML} xml The XML to search for.
     * @returns {Boolean}
     */
    this.contains = function (xml) {
        return new Boolean();
    };
    /*
     * Creates a copy of this XML object.
     * @returns {XML}
     */
    this.copy = function () {
        return new XML();
    };
    /*
     * Returns all the XML-valued descendants of this XML object with the given name.
     *
     * @param {String} [name] The name of the descendant to find.
     * @returns {XML}
     */
    this.descendants = function (name) {
        return new XML();
    };
    /*
     * Returns a list of XML children that are elements with a given name, or all children that are XML elements.
     *
     * @param {String} [name] The element name. If not supplied, gets all children that are XML elements.
     * @returns {XML}
     */
    this.elements = function (name) {
        return new XML();
    };
    /*
     * Reports whether this XML object contains complex content.
     * @returns {Boolean}
     */
    this.hasComplexContent = function () {
        return new Boolean();
    };
    /*
     * Reports whether this XML object contains simple content.
     * @returns {Boolean}
     */
    this.hasSimpleContent = function () {
        return new Boolean();
    };
    /*
     * undefined
     * @returns {Array}
     */
    this.inScopeNamespaces = function () {
        return new Array();
    };
    /*
     * Inserts the given child2 after the given child1 in this XML object and returns this XML object.
     *
     * @param {XML} child1 The child to insert the other child after.
     * @param {XML} child2 The XML to insert.
     */
    this.insertChildAfter = function (child1, child2) {
    };
    /*
     * Inserts the given child2 before the given child1 in this XML object and returns this XML object.
     *
     * @param {XML} child1 The child to search for.
     * @param {XML} child2 The XML to insert.
     */
    this.insertChildBefore = function (child1, child2) {
    };
    /*
     * Returns the number of elements contained in an XML list. If this XML object is not a list, returns 1.
     * @returns {Number}
     */
    this.length = function () {
        return new Number();
    };
    /*
     * Returns the local name of this XML object.
     * @returns {String}
     */
    this.localName = function () {
        return new String();
    };
    /*
     * Returns a QName object containing the URI and the local name of the element.
     * @returns {QName}
     */
    this.name = function () {
        return new QName();
    };
    /*
     * Returns a Namespace object containing the namespace URI of the current element.
     * @returns {Namespace}
     */
    this.namespace = function () {
        return new Namespace();
    };
    /*
     * Returns an array containing all namespace declarations of this XML object.
     * @returns {Array}
     */
    this.namespaceDeclarations = function () {
        return new Array();
    };
    /*
     * Returns the type of this XML object as one of the strings "element", "attribute", "comment", "processing-instruction", or "text".
     * @returns {String}
     */
    this.nodeKind = function () {
        return new String();
    };
    /*
     * Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes. Returns this XML object.
     * @returns {XML}
     */
    this.normalize = function () {
        return new XML();
    };
    /*
     * Returns the parent object of this XML object.
     * @returns {XML}
     */
    this.parent = function () {
        return new XML();
    };
    /*
     * Returns a list of preprocessing instructions.
     *
     * @param {String} [name] The name of the preprocessing instruction to return.
     * @returns {XML}
     */
    this.processingInstructions = function (name) {
        return new XML();
    };
    /*
     * Inserts a given child into this object before its existing XML properties, and returns this XML object.
     *
     * @param {XML} child The XML to insert.
     * @returns {XML}
     */
    this.prependChild = function (child) {
        return new XML();
    };
    /*
     * Removes the given namespace from this XML, and returns this XML.
     *
     * @param {Namespace} namespace The namespace to remove.
     * @returns {XML}
     */
    this.removeNamespace = function (namespace) {
        return new XML();
    };
    /*
     * Replaces the value of specified XML properties of this XML object returns this XML object.
     *
     * @param {String} name The property name.
     * @param {XML} value The XML with which to replace the value of the matching property.
     * @returns {XML}
     */
    this.replace = function (name, value) {
        return new XML();
    };
    /*
     * Replaces all of the XML-valued properties in this object with a new value, and returns this XML object.
     *
     * @param {XML} value The new value, which can be a single XML object or an XML list.
     * @returns {XML}
     */
    this.setChildren = function (value) {
        return new XML();
    };
    /*
     * Replaces the local name of this XML object  with a string constructed from the given name
     *
     * @param {String} name The name to set.
     */
    this.setLocalName = function (name) {
    };
    /*
     * Replaces the name of this XML object with the given QName object.
     *
     * @param {QName} name The fully qualified name.
     */
    this.setName = function (name) {
    };
    /*
     * Sets the namespace for this XML element.
     *
     * @param {Namespace} namespace The namespace to set.
     */
    this.setNamespace = function (namespace) {
    };
    /*
     * Returns an XML list containing all XML properties of this XML object that represent XML text nodes.
     * @returns {XML}
     */
    this.text = function () {
        return new XML();
    };
    /*
     * Returns the string representation of this object.
     * @returns {String}
     */
    this.toString = function () {
        return new String();
    };
    /*
     * Returns an XML-encoded string representation of this XML object.
     * @returns {String}
     */
    this.toXMLString = function () {
        return new String();
    };
    /*
     * Evaluates the given XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node.
     *
     * @param {String} expr The XPath expression to use.
     * @returns {XML}
     */
    this.xpath = function (expr) {
        return new XML();
    };
}
/*
 * An XML list object.
 */
var XMLList = {};
/*
 * The global methods and properties for ExtendScript.
 */
var global = {
    /*
     * The NaN global property is a predefined variable with the value NaN (Not-a-Number), as specified by the IEEE-754 standard.
     * @type {Number}
     */
    NaN: undefined,
    /*
     * The Infinity global property is a predefined variable with the value for infinity.
     * @type {Number}
     */
    Infinity: undefined,
    /*
     * This global property is a predefined variable with the value for an undefined value.
     * @type {Undefined}
     */
    undefined: undefined,
    /*
     * Encodes a string after RFC2396.
   *
     * @param {String} text The text to encode.
     * @returns {String}
     */
    encodeURI: function (text) {
        return new String();
    },
    /*
     * Encodes a string after RFC2396.
   *
     * @param {String} text The text to encode.
     * @returns {String}
     */
    encodeURIComponent: function (text) {
        return new String();
    },
    /*
     * undefined
   *
     * @param {String} uri The text to decode.
     * @returns {String}
     */
    decodeURI: function (uri) {
        return new String();
    },
    /*
     * undefined
   *
     * @param {String} uri The text to decode.
     * @returns {String}
     */
    decodeURIComponent: function (uri) {
        return new String();
    },
    /*
     * Creates a URL-encoded string from aString.
   *
     * @param {String} aString The string to be encoded.
     * @returns {String}
     */
    escape: function (aString) {
        return new String();
    },
    /*
     * Evaluates its argument as a JavaScript script, and returns the result of evaluation.
   *
     * @param {String} stringExpression The string to evaluate.
     * @returns {any}
     */
    eval: function (stringExpression) {
        return new any();
    },
    /*
     * Creates a source code representation of the supplied argument, and returns it as a string.
   *
     * @param {any} what The object to uneval.
     * @returns {String}
     */
    uneval: function (what) {
        return new String();
    },
    /*
     * Evaluates an expression and reports whether the result is a finite number.
   *
     * @param {Number} expression Any valid JavaScript expression.
     * @returns {Boolean}
     */
    isFinite: function (expression) {
        return new Boolean();
    },
    /*
     * Evaluates an expression and reports whether the result is "Not-a-Number" (NaN).
   *
     * @param {Number} expression Any valid JavaScript expression.
     * @returns {Boolean}
     */
    isNaN: function (expression) {
        return new Boolean();
    },
    /*
     * Extracts an integer from a string.
   *
     * @param {String} text The string from which to extract an integer.
     * @param {Number} [base] The base of the string to parse (from base 2 to base 36).
     * @returns {Number}
     */
    parseInt: function (text, base) {
        return new Number();
    },
    /*
     * Extracts a floating-point number from a string.
   *
     * @param {String} text The string from which to extract a floating point number.
     * @returns {Number}
     */
    parseFloat: function (text) {
        return new Number();
    },
    /*
     * Translates URL-encoded string into a regular string, and returns that string.
   *
     * @param {String} stringExpression The URL-encoded string to convert.
     * @returns {String}
     */
    unescape: function (stringExpression) {
        return new String();
    },
    /*
     * Localizes a ZString-encoded string and merges additional arguments into the string.
   *
     * @param {String} what The string to localize. A ZString-encoded string that can contain placeholder for additional arguments in the form %1 to %n.
     * @param {any} [argument] Optional argument(s) to be merged into the string. There may be more than one argument.
     * @returns {String}
     */
    localize: function (what, argument) {
        return new String();
    },
    /*
     * Returns true if the supplied string is a valid XML name.
   *
     * @param {String} name The XML name to test.
     * @returns {Boolean}
     */
    isXMLName: function (name) {
        return new Boolean();
    },
    /*
     * Defines the default XML namespace.
   *
     * @param {Namespace} namespace The namespace to use.
     */
    setDefaultXMLNamespace: function (namespaces) {
    },
    /*
     * Displays an alert box
   *
     * @param {String} message The text to display
     * @param {String} [title] The title of the alert; ignored on the Macintosh
     * @param {Boolean} errorIcon Display an Error icon; ignored on the Macintosh
     */
    alert: function (message, title, errorIcon) {
    },
    /*
     * Displays an alert box with Yes and No buttons; returns true for Yes
   *
     * @param {String} message The text to display
     * @param {Boolean} noAsDefault Set to true to set the No button as the default button
     * @param {String} [title] The title of the alert; ignored on the Macintosh
     * @returns {Boolean}
     */
    confirm: function (message, noAsDefault, title) {
        return new Boolean();
    },
    /*
     * Displays a dialog allowing the user to enter text
   *
     * @param {String} prompt The text to display
     * @param {String} [default] The default text to preset the edit field with
     * @param {String} [title] The title of the dialog;
     * @returns {String}
     */
    prompt: function (prompt, defaults, title) {
        return new String();
    }
};
