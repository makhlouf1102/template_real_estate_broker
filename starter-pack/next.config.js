const withNextIntl = require('next-intl/plugin')();


/** @type {import('next').NextConfig} */
const config = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        // ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = withNextIntl(config);
