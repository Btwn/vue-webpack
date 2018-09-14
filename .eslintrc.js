module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        brower: true,
        node: true,
        mocha: true
    },
    globals: {
        expect: true
    },
    extends: [
        'plugin:vue/recommended',
        'standard'
    ],
    plugins: [
        'vue'
    ]
}
