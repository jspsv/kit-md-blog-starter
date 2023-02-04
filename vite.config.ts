import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

import reMdPlugin from './src/lib/vite-plugin-re-md';

const config: UserConfig = {
	// plugins: [sveltekit()],
	// plugins: [sveltekit(), reMdPlugin()],
	plugins: [reMdPlugin(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
