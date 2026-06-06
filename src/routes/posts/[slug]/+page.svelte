<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="mx-auto max-w-screen-lg">
	{#if data.cover}
		<img src={data.cover.src} alt={data.title} class="mb-4 rounded-lg" />
	{/if}
	<div class="mx-auto prose">{@html data.content}</div>
</div>
