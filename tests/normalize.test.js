(function (undefined) {
    "use strict";

    var assert = require("assert"),
        normalizeForSearch = require("../src/normalize");

    describe("normalizeForSearch", function () {
        it("converts the passed string to lower case", function () {
            assert.strictEqual(normalizeForSearch("Ack"), "ack");
        });

        it("normalizes ä", function () {
            assert.strictEqual(normalizeForSearch("ü"), "u");
        });
    });
}());
