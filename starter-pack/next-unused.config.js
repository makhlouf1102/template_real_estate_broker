module.exports = {
    include: [
        'src/app/**/*.tsx',
        'src/app/**/*.ts',
        'src/app/**/*.jsx',
        'src/app/**/*.js'
    ],
    exclude: ['node_modules', '.next'],
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    plugins: [
        {
            name: 'bundle-analyzer',
            options: {
                enabled: process.env.ANALYZE === 'true',
            },
        },
    ],
};
