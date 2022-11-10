import { TSESLint } from "@typescript-eslint/utils";

const MESSAGE_ID = "no-dirty-words" as const;

export const noDirtyWords: TSESLint.RuleModule<typeof MESSAGE_ID> = {
  meta: {
    messages: { [MESSAGE_ID]: "dirty word found." },
    type: "problem",
    schema: {},
    fixable: "code",
    hasSuggestions: true,
    deprecated: false,
    docs: {
      description: "",
      recommended: "error",
      url: "",
    },
  },
  create: (context) => {
    return {
      Identifier(node) {
        if (node.name === "fuck") {
          // すぐreturnした方がいいかな。
          context.report({
            node,
            messageId: MESSAGE_ID,
            fix(fixer) {
              return fixer.replaceText(node, "fxxk");
            },
          });
        }
      },
      Literal(node) {
        if (node.value === "fuck") {
          // すぐreturnした方がいいかな。
          context.report({
            node,
            messageId: MESSAGE_ID,
            fix(fixer) {
              return fixer.replaceText(node, '"fxxk"');
            },
          });
        }
      },
    };
  },
  defaultOptions: [],
};
