<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
	import Footer from './Footer.svelte';
	import Blog from './Blog.svelte';
</script>

<svelte:head>
	<title>Sean Spradlin</title>
</svelte:head>

<main class="container mx-auto p-4">
	<Hero />
	<Projects />
	<Blog blogs={data.blogs} />
</main>

<Footer />
