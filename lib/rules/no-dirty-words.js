"use strict";
var _a;
exports.__esModule = true;
exports.noDirtyWords = void 0;
var MESSAGE_ID = "no-dirty-words";
exports.noDirtyWords = {
    meta: {
        messages: (_a = {}, _a[MESSAGE_ID] = "dirty word found.", _a),
        type: "problem",
        schema: {},
        fixable: "code",
        hasSuggestions: true,
        deprecated: false,
        docs: {
            description: "",
            recommended: "error",
            url: ""
        }
    },
    create: function (context) {
        return {
            Identifier: function (node) {
                if (node.name === "fuck") {
                    // すぐreturnした方がいいかな。
                    context.report({
                        node: node,
                        messageId: MESSAGE_ID,
                        fix: function (fixer) {
                            return fixer.replaceText(node, "fxxk");
                        }
                    });
                }
            },
            Literal: function (node) {
                if (node.value === "fuck") {
                    // すぐreturnした方がいいかな。
                    context.report({
                        node: node,
                        messageId: MESSAGE_ID,
                        fix: function (fixer) {
                            return fixer.replaceText(node, '"fxxk"');
                        }
                    });
                }
            }
        };
    },
    defaultOptions: []
};
