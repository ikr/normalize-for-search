(function (window, undefined) {
    "use strict";

    var normalizeForSearch = function (s) {
            return Array.prototype.map.call(s.toLowerCase(), function (c) {
                if ("ü" === c) {
                    return "u";
                }

                return c;
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
