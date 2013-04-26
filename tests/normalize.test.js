(function (undefined) {
    "use strict";

    var assert = require("assert"),
        normalizeForSearch = require("../src/normalize");

    describe("normalizeForSearch", function () {
        it("converts the passed string to lower case", function () {
            assert.strictEqual(normalizeForSearch("Ack"), "ack");
        });

        it("normalizes ä", function () {
            assert.strictEqual(normalizeForSearch("ä"), "a");
        });

        it("normalizes ö", function () {
            assert.strictEqual(normalizeForSearch("ö"), "o");
        });

        it("normalizes ü", function () {
            assert.strictEqual(normalizeForSearch("ü"), "u");
        });

        it("normalizes ё", function () {
            assert.strictEqual(normalizeForSearch("ё"), "е");
        });

        it("satisfies the end-to-end test from the README", function () {
            assert.strictEqual(
                normalizeForSearch("Dät ist naïve und ÜBERCOOL, ё-маё!"),
                "dat ist naive und ubercool, е-мае!"
            );
        });
    });
}());
