<script lang="ts">
	import profile from '$lib/assets/profile.webp';
</script>

<section
	id="hero"
	class="wrap mx-auto flex items-center justify-between gap-16 pt-24 pb-16 md:gap-8"
>
	<div>
		<h1 class="mb-8 font-display text-4xl font-black text-rp-iris">Welcome</h1>
		<p class="text-muted mb-4 max-w-prose font-body">
			I'm <strong class="text-text-strong">Sean Spradlin</strong>, a substitute
			teacher-turned-programmer. I've been doing this professionally since jQuery and Bootstrap were
			the hotness, and unprofessionally since SimCity 2000.
		</p>
		<p class="text-text-muted mb-4 max-w-prose font-body">
			These days I'm hunting for an ideal workflow in the age of agentic coding tools — one that
			keeps granular control over <em>how</em> things are built while delegating the implementation.
		</p>
	</div>

	<div class="lg:w-48:self-center aspect-square w-85 shrink-0" aria-hidden="true">
		<img
			src={profile}
			alt="Portrait of Sean Spradlin"
			fetchpriority="high"
			class="border-subtle block aspect-square w-full rounded-xl border-4 object-cover object-top shadow-md saturate-75"
		/>
	</div>
</section>
