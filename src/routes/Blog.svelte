<script lang="ts">
	import { resolve } from '$app/paths';
	type Post = {
		title: string;
		slug: string;
		date: string;
		excerpt: string;
		readingTime: number;
	};
	const { blogs }: { blogs: Post[] } = $props();
	function postYear(date: string) {
		return new Date(date).getFullYear();
	}

	function readingTimeLabel(minutes: number) {
		return `${Math.ceil(minutes)} min read`;
	}
</script>

<section id="blog" class="my-16 lg:my-32">
	<h2 class="font-display text-3xl font-bold">Blog</h2>
	<hr class="mb-8" />
	<div class="flex flex-col gap-4">
		{#each blogs as blog (blog.slug)}
			<a
				class="duration-base flex flex-row border-b border-rp-subtle py-6 pr-6 pl-0 text-inherit no-underline transition-[padding-left] ease-out first:border-t hover:pl-4"
				href={resolve('/blog/[slug]', { slug: blog.slug })}
			>
				<div class="grow">
					<div class="mb-2 flex items-center gap-3 text-xs">
						<span>{postYear(blog.date)}</span>
						<span class="h-0.5 w-0.5 rounded-full bg-current" aria-hidden="true"></span>
						<span>{readingTimeLabel(blog.readingTime)}</span>
					</div>
					<h3
						class="duration-fast mb-2 font-display text-2xl font-bold tracking-tight text-rp-pine"
					>
						{blog.title}
					</h3>
					<p class="leading-prose text-text-muted m-0 max-w-[64ch] font-body text-base">
						{blog.excerpt}
					</p>
				</div>
				<span class="icon-[ri--arrow-right-line] self-center text-2xl text-rp-muted"></span>
			</a>
		{/each}
	</div>
</section>
