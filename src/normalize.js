(function (window, undefined) {
    'use strict';

    var normalizeForSearch = function (s) {

        if(!Array.prototype.map) {
            var breaker = {},
                ObjProto = Object.prototype,
                hasOwnProperty = ObjProto.hasOwnProperty,
                has = function(obj, key) {
                    return hasOwnProperty.call(obj, key);
                },
                each = function(obj, iterator, context) {
                if (obj == null) return;
                if (obj.length === +obj.length) {
                    for (var i = 0, l = obj.length; i < l; i++) {
                        if (iterator.call(context, obj[i], i, obj) === breaker) return;
                    }
                } else {
                    for (var key in obj) {
                        if (has(obj, key)) {
                            if (iterator.call(context, obj[key], key, obj) === breaker) return;
                        }
                    }
                }
            };

            Array.prototype.map = function(iterator, context) {
                var results = [];
                each(this, function(value, index, list) {
                    results.push(iterator.call(context, value, index, list));
                });
                return results;
            };
        }

        return Array.prototype.map.call(s.toLowerCase(), function (c) {
                switch (c) {
                case 'ä':
                    return 'ae';

                case 'á':
                case 'à':
                case 'ã':
                case 'â':
                    return 'a';

                case 'ç':
                case 'č':
                    return 'c';

                case 'é':
                case 'ê':
                case 'è':
                    return 'e';

                case 'ï':
                case 'í':
                    return 'i';

                case 'ö':
                    return 'oe';

                case 'ó':
                case 'õ':
                case 'ô':
                    return 'o';

                case 'ś':
                case 'š':
                    return 's';

                case 'ü':
                    return 'ue';

                case 'ú':
                    return 'u';

                case 'ß':
                    return 'ss';

                case 'ё':
                    return 'е';

                default:
                    return c;
                }
            }).join('');
        };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = normalizeForSearch;
    }
    else if (typeof angular !== 'undefined' && angular.module) {
        angular.module('normalizeForSearch', []).filter('normalizeForSearch', function () {
            return normalizeForSearch;
        });
    }
}(this));
