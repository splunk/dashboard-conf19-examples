module.exports = {
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'class-methods-use-this': 'off',
    },
    env: {
        browser: true,
    },
};
