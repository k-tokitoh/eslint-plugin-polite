"use strict";
var no_dirty_words_1 = require("./rules/no-dirty-words");
module.exports = {
    rules: {
        "no-dirty-words": no_dirty_words_1.noDirtyWords
    },
    configs: {
        all: {
            plugins: ["eslint-plugin-polite"],
            rules: {
                "no-dirty-words": "error"
            }
        }
    }
};
