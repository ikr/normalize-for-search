/* jshint bitwise: false, maxcomplexity: 100 */

(function (window, undefined) {
    'use strict';

    var normalizeForSearch = function (s) {

        function filter(c) {
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
        }

        var normalized = '', i, l;
        s = s.toLowerCase();
        for (i = 0, l = s.length; i < l; i = i + 1) {
            normalized = normalized + filter(s.charAt(i));
        }
        return normalized;
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
