# About

Un-accents and un-umlauts charecters in a string. Also preliminary converts the string to lower
case. We use it for autocomplete: both for the matched strings -- on the server side, when indexing;
and for the strings the user types into a text input in the browser.

Has nothing to do with [Unicode Normalization](http://www.unicode.org/reports/tr15/), but rather
expects the passed strings being already Unicode-normalized.

# Installation

## Under Node.js

    $ npm install --save normalize-for-search

then

    var normalizeForSearch = require('normalize-for-search');

## In CouchDB

Just drop the `src/normalize.js` contents into your CouchDB design document -- for example, into
`{views: {lib: {normalize: 'JSON-ENCODED src/normalize.js CODE HERE'}}}`, and then `require` it
elsewhere:

    var normalizeForSearch = require('views/lib/normalize');

## In the browser

    $ bower install --save normalize-for-search

then

    <script src="/components/normalize-for-search/src/normalize.js"></script>

    <script>
        var normalizeForSearch = window['normalize-for-search'];
    </script>

# API

    normalizeForSearch('Dät ist naïve und ÜBERCOOL, ё-маё!');
    // Results in 'dat ist naive und ubercool, е-мае!'

# License: MIT

Copyright (c) 2013 Ivan Krechetov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
