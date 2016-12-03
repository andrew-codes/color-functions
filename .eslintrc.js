module.exports = {
    env: {
        browser: true,
        mocha: true,
        node: true
    },
    extends: [
        'eslint-config-andrew-codes/base',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        'no-magic-numbers': 'off',
        'no-mixed-operators': 'off',
    },
    plugins: [
        'babel',
        'import'
    ]
};
