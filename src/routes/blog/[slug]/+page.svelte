<script lang="ts">
	import type { PageProps } from './$types';
	import { optimize } from '$lib/image';
	import { resolve } from '$app/paths';
	import { SITE_URL, PERSON_ID, person, jsonLdScript } from '$lib/jsonld';

	let { data }: PageProps = $props();

	const schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'@id': `${SITE_URL}${data.permalink}#blogposting`,
		headline: data.title,
		description: data.excerpt,
		datePublished: data.date,
		dateModified: data.date,
		url: `${SITE_URL}${data.permalink}`,
		mainEntityOfPage: `${SITE_URL}${data.permalink}`,
		...(data.cover ? { image: `${SITE_URL}${data.cover.src}` } : {}),
		author: person,
		publisher: { '@id': PERSON_ID }
	});
</script>

<svelte:head>
	<title>{data.title} — Sean Spradlin</title>
	<meta name="description" content={data.excerpt} />
	{@html jsonLdScript(schema)}
</svelte:head>

<div class="mx-auto my-8 max-w-xl lg:my-16">
	<a href={resolve('/')} class="mb-6 inline-block text-sm text-gray-500 hover:text-gray-700"
		>&larr; Home</a
	>
	{#if data.cover}
		<img srcset={optimize(data.cover.src, [340, 640, 828, 1200])} alt="" class="mb-4 rounded-lg" />
	{/if}
	<div class="mx-auto prose">
		<h1>{data.title}</h1>
		{@html data.content}
	</div>
</div>
