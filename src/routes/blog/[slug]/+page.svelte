<script lang="ts">
	import type { PageProps } from './$types';
	import { optimize } from '$lib/image';
	import { resolve } from '$app/paths';

	let { data }: PageProps = $props();
</script>

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
