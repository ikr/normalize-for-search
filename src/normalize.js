(function (window, undefined) {
    "use strict";

    var normalizeForSearch = function (s) {
            return Array.prototype.map.call(s.toLowerCase(), function (c) {
                switch (c) {
                case "ä":
                case "á":
                case "à":
                case "ã":
                    return "a";

                case "ç":
                case "č":
                    return "c";

                case "é":
                case "ê":
                    return "e";

                case "ï":
                case "í":
                    return "i";

                case "ö":
                case "ó":
                case "õ":
                case "ô":
                    return "o";

                case "ś":
                case "š":
                    return "s";

                case "ü":
                case "ú":
                    return "u";

                case "ё":
                    return "е";

                default:
                    return c;
                }
            }).join("");
        };

    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            module.exports = normalizeForSearch;
        }
        else {
            exports["normalize-for-search"] = normalizeForSearch;
        }
    }
    else {
        window["normalize-for-search"] = normalizeForSearch;
    }
}(this));
