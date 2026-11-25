/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		// Bootstrap 5 still uses Sass features that newer Sass versions flag as deprecated.
		quietDeps: true,
		silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
	},
};

module.exports = nextConfig;
