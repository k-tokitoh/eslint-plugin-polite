import { noDirtyWords } from "./rules/no-dirty-words";

export = {
  rules: {
    "no-dirty-words": noDirtyWords,
  },
  configs: {
    all: {
      plugins: ["eslint-plugin-polite"],
      rules: {
        "no-dirty-words": "error",
      },
    },
  },
};
