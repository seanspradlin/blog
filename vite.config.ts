import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

let veliteStarted = false;
function velite() {
	return {
		name: 'velite',
		async configResolved() {
			if (veliteStarted) return;
			veliteStarted = true;
			const { build } = await import('velite');
			await build({ watch: process.env.NODE_ENV === 'development', clean: true });
		}
	};
}

export default defineConfig({ plugins: [tailwindcss(), velite(), sveltekit()] });
