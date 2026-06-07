<script lang="ts">
	// Self-hosted fonts (bundled by Vite, served same-origin with font-display: swap).
	// Replaces the render-blocking third-party request to fonts.googleapis.com.
	import '@fontsource-variable/hanken-grotesk';
	import '@fontsource-variable/source-serif-4/opsz.css';
	import '@fontsource-variable/source-serif-4/opsz-italic.css';
	import '@fontsource-variable/jetbrains-mono';
	import '@fontsource-variable/jetbrains-mono/wght-italic.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
