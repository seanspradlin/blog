<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
	import Social from './Social.svelte';
	import Blog from './Blog.svelte';
</script>

<svelte:head>
	<title>Sean Spradlin</title>
</svelte:head>

<Header />

<main id="top" class="container mx-auto p-4">
	<Hero />
	<Projects />
	<Blog blogs={data.blogs} />
	<Social />
</main>
