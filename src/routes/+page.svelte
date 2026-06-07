<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
	import Footer from './Footer.svelte';
	import Blog from './Blog.svelte';
</script>

<svelte:head>
	<title>Portfolio - Sean Spradlin</title>
	<meta
		name="description"
		content="Sean Spradlin is a Nashville-based software engineer. Here lives side-projects and brain dumps he's produced."
	/>
</svelte:head>

<main class="container mx-auto p-4">
	<Hero />
	<Projects />
	<Blog blogs={data.blogs} />
</main>

<Footer />
