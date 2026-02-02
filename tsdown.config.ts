import {defineConfig} from 'tsdown';

export default defineConfig({
	entry: 'source/cli.tsx',
	outputOptions: {
		file: 'dist/bundle.js',
		format: 'cjs',
	},
});
