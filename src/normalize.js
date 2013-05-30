/* jshint bitwise: false, maxcomplexity: 100 */

(function (window, undefined) {
    'use strict';

    var normalizeForSearch = function (s) {
        // Production steps of ECMA-262, Edition 5, 15.4.4.19
        // Reference: http://es5.github.com/#x15.4.4.19
        if (!Array.prototype.map) {
            Array.prototype.map = function (callback, thisArg) {
                var T, A, k, O, len, kValue, mappedValue;

                if ((this === null) || (typeof this === 'undefined')) {
                    throw new TypeError(' this is null or not defined');
                }

                O = Object(this);
                len = O.length >>> 0;

                if (typeof callback !== 'function') {
                    throw new TypeError(callback + ' is not a function');
                }

                if (thisArg) {
                    T = thisArg;
                }

                A = new Array(len);
                k = 0;

                while (k < len) {
                    if (k in O) {
                        kValue = O[k];
                        mappedValue = callback.call(T, kValue, k, O);
                        A[k] = mappedValue;
                    }

                    k = k + 1;
                }

                return A;
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
