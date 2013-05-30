(function (window, undefined) {
    'use strict';

    var normalizeForSearch = function (s) {

        // Production steps of ECMA-262, Edition 5, 15.4.4.19
        // Reference: http://es5.github.com/#x15.4.4.19
        if(!Array.prototype.map){Array.prototype.map=function(e,t){var n,r,i;if(this==null){throw new TypeError(" this is null or not defined")}var s=Object(this);var o=s.length>>>0;if(typeof e!=="function"){throw new TypeError(e+" is not a function")}if(t){n=t}r=new Array(o);i=0;while(i<o){var u,a;if(i in s){u=s[i];a=e.call(n,u,i,s);r[i]=a}i++}return r}}

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
