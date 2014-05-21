(function (undefined) {
    'use strict';

    var assert = require('assert'),
        normalizeForSearch = require('../src/normalize'),
        testCases = function () {
            it('converts the passed string to lower case', function () {
                assert.strictEqual(normalizeForSearch('Ack'), 'ack');
            });

            it('normalizes ä', function () {
                assert.strictEqual(normalizeForSearch('ä'), 'ae');
            });

            it('normalizes å', function () {
                assert.strictEqual(normalizeForSearch('å'), 'aa');
            });

            it('normalizes â', function () {
                assert.strictEqual(normalizeForSearch('â'), 'a');
            });

            it('normalizes ö', function () {
                assert.strictEqual(normalizeForSearch('ö'), 'oe');
            });

            it('normalizes ô', function () {
                assert.strictEqual(normalizeForSearch('ô'), 'o');
            });

            it('normalizes ü', function () {
                assert.strictEqual(normalizeForSearch('ü'), 'ue');
            });

            it('normalizes ß', function () {
                assert.strictEqual(normalizeForSearch('Straße'), 'strasse');
            });

            it('normalizes ё', function () {
                assert.strictEqual(normalizeForSearch('ё'), 'е');
            });

            it('normalizes è', function () {
                assert.strictEqual(normalizeForSearch('è'), 'e');
            });

            it('satisfies the end-to-end test from the README', function () {
                assert.strictEqual(
                    normalizeForSearch('Dät ist naïve und ÜBERCOOL, ё-маё!'),
                    'daet ist naive und uebercool, е-мае!'
                );
            });
        };

    describe('works normally', testCases);

    describe('works in IE7/8', function () {
        beforeEach(function () {
            delete Array.prototype.map;
        });

        testCases();
    });
}());
