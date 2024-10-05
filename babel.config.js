module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            "nativewind/babel",
            [
                'module-resolver',
                {
                    root: ['./src/'],
                    alias: {
                        '@components': 'components',
                        '@utils': 'utils',
                        '@hooks': 'hooks',
                        '@assets': 'assets',
                    },
                },
            ],],
    };
};
