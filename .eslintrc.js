module.exports = {
    "env": {
        "browser": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    }
};
