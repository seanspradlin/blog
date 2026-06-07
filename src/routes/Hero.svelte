<script lang="ts">
	import profile from '$lib/assets/profile.webp';
</script>

<section id="hero" class="mx-auto max-w-5xl lg:my-48">
	<h1 class="mb-8 font-display text-4xl font-black text-rp-iris lg:text-6xl">Welcome</h1>
	<div class="float-right mb-2 ml-4 aspect-square w-48 md:w-56 lg:w-64" aria-hidden="true">
		<img
			src={profile}
			alt="Portrait of Sean Spradlin"
			fetchpriority="high"
			class="border-subtle block aspect-square w-full rounded-xl border-4 object-cover object-top shadow-md saturate-75"
		/>
	</div>
	<div class="text-muted flex max-w-prose flex-col gap-4 font-body">
		<p>
			I'm <strong class="text-text-strong text-rp-rose">Sean Spradlin</strong>, a substitute
			teacher-turned-programmer. I've been doing this professionally since jQuery and Bootstrap were
			hot, and unprofessionally since SimCity 2000.
		</p>
		<p>
			In this space, you will find some of my hard-coded side projects, my vibe-coded side projects,
			general brain dumps, and shameless self-promotion.
		</p>
		<p>My long-term goal is to bring back GeoCities.</p>
	</div>
	<ul class="my-8 flex items-center gap-4">
		<li>
			<a
				href="https://github.com/seanspradlin"
				class="inline-block rounded border border-rp-text px-2 py-1 font-semibold text-rp-pine no-underline shadow transition-colors duration-200 hover:text-rp-foam hover:underline"
			>
				<div class="flex flex-row items-center gap-2">
					<span class="icon-[ri--github-fill]"></span> GitHub
				</div>
			</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/seanthomasspradlin/"
				class="inline-block rounded border border-rp-text px-2 py-1 font-semibold text-rp-pine no-underline shadow transition-colors duration-200 hover:text-rp-foam hover:underline"
			>
				<div class="flex flex-row items-center gap-2">
					<span class="icon-[ri--linkedin-fill]"></span> LinkedIn
				</div>
			</a>
		</li>
	</ul>
</section>
