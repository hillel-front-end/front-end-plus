this.findById = function (array, id) {
    var length = (array && array.length) || 0;

    for (var i = 0; i < length; i++) {
        if (array[i] && array[i].id === id) {
            return array[i];
        }
    }

    return {};
    // return this.find(array, { id: id });
};

this.fromString = function (str, separator) {
    var ret = [];

    if (str) {
        ret = str.split(separator || ',').filter(function (item) {
            return item;
        });
    }

    return ret;
};

this._equals = function (a, b, simple) {
    var key,
        keys = Object.keys(b);

    for (var j in keys) {
        key = keys[j];
        if ((!simple && a[key] !== b[key]) || (simple && a[key] != b[key])) { // eslint-disable-line eqeqeq
            return false;
        }
    }

    return true;
};

this.find = function (array, obj, simple) {
    var length = (array && array.length) || 0;

    for (var i = 0; i < length; i++) {
        if (this._equals(array[i], obj, simple)) {
            return array[i];
        }
    }

    return {};
};

this.filter = function (array, obj) {
    var ret = [];
    var length = (array && array.length) || 0;

    for (var i = 0; i < length; i++) {
        if (this._equals(array[i], obj)) {
            ret.push(array[i]);
        }
    }

    return ret;
};

this.pluck = function (collection, prop) {
    var retArr = [];

    for (var i in collection) {
        if (collection.hasOwnProperty(i) && collection[i][prop]) {
            retArr.push(collection[i][prop]);
        }
    }

    return retArr;
};

this.getByIndex = function (array, index) {
    if (index >= array.length) {
        index = 0;
    }

    if (index < 0) {
        index = array.length - 1;
    }

    return index;
};

this.remove = function (array, item) {
    var index = array.indexOf(item);

    if (index > -1) {
        return array.splice(index, 1);
    }
};

this.startsWith = function (array, item) {
    var index = array.indexOf(item);

    if (index > -1) {
        return item;
    }

    for (index = 0; index < array.length; index++) {
        if (this.stringStartsWith(array[index], item)) {
            return array[index];
        }
    }

    return undefined;
};

this.stringStartsWith = function (string, prefix) {
    return string.slice(0, prefix.length) === prefix;
};

this.getIndex = function (parent, elem) {
    return Array.prototype.indexOf.call(parent, elem);
};

this.move = function (array, from, to) {
    if (!angular.isArray(array)) {
        return array;
    }
    array.splice(to, 0, array.splice(from, 1)[0]);

    return array;
};

this.uniq = function (array) {
    return array.filter(function (item, pos) {
        return array.indexOf(item) === pos;
    });
};

this.intersection = function () {
    var ret = arguments[0] || [];

    function theSame(n) {
        return ret.indexOf(n) !== -1;
    }

    for (var i = 1; i < arguments.length; i++) {
        ret = arguments[i].filter(theSame);
    }

    return ret;
};

this.difference = function () {
    var result = [],
        fullArray = [],
        argsLength = arguments.length;

    for (var i = 0; i < argsLength; i++) {
        fullArray = fullArray.concat(arguments[i]);
    }

    result = fullArray.filter(function (item, index, arr) {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    });

    return result;
};

this.fromObject = function (obj) {
    var array = [];

    angular.forEach(obj, function (element) {
        array.push(element);
    });

    return array;
};

this.sortBy = function (arr, propName, asc) {
    return arr.sort(function (a, b) {
        var aProp = (a[propName] || '').toLowerCase();
        var bProp = (b[propName] || '').toLowerCase();

        if (aProp === bProp) {
            return 0;
        }
        if (asc) {
            return aProp < bProp ? -1 : 1;
        }

        return aProp < bProp ? 1 : -1;
    });
};

this.isContain = function (arr, item) {
    return this.getIndex(arr, item) !== -1;
};

this.pushUniq = function (arr, item) {
    if (!this.isContain(arr, item)) {
        arr.push(item);
    }

    return arr;
};