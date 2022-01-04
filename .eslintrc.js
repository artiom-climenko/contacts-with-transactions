const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    extends: [
        'react-app',
        'prettier',
        'plugin:import/warnings',
    ],
    plugins: [
        'react',
        'react-hooks',
        'prettier',
    ],
    rules: {
        'react/prop-types': OFF,
        'import/no-default-export': ERROR,
        'import/no-named-as-default': ERROR,
        'no-unused-vars': ERROR,
        'no-implicit-coercion': ERROR,
        'prettier/prettier': ERROR,
        'react-hooks/rules-of-hooks': ERROR,
        'react-hooks/exhaustive-deps': WARN,
    },
};