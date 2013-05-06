(function (undefined) {
    "use strict";

    var assert = require("assert"),
        normalizeForSearch = require("../src/normalize");

    describe("normalizeForSearch", function () {
        it("converts the passed string to lower case", function () {
            assert.strictEqual(normalizeForSearch("Ack"), "ack");
        });

        it("normalizes ä", function () {
            assert.strictEqual(normalizeForSearch("ä"), "ae");
        });

        it("normalizes ö", function () {
            assert.strictEqual(normalizeForSearch("ö"), "oe");
        });

        it("normalizes ô", function () {
            assert.strictEqual(normalizeForSearch("ô"), "o");
        });

        it("normalizes ü", function () {
            assert.strictEqual(normalizeForSearch("ü"), "ue");
        });

        it("normalizes ß", function () {
            assert.strictEqual(normalizeForSearch("Straße"), "strasse");
        });

        it("normalizes ё", function () {
            assert.strictEqual(normalizeForSearch("ё"), "е");
        });

        it("satisfies the end-to-end test from the README", function () {
            assert.strictEqual(
                normalizeForSearch("Dät ist naïve und ÜBERCOOL, ё-маё!"),
                "daet ist naive und uebercool, е-мае!"
            );
        });
    });
}());
