<script lang="ts">
	import type { PageProps } from './$types';
	import { resolve } from '$app/paths';
	let { data }: PageProps = $props();
</script>

<h1>Welcome</h1>
<p>This is a space for my personal projects.</p>
<h2>Social</h2>
<ul>
	<li><a href="https://github.com/seanspradlin">My GitHub</a></li>
	<li><a href="https://www.linkedin.com/in/seanthomasspradlin/">My LinkedIn</a></li>
</ul>
<h2>Projects</h2>
<h3>Bonfire</h3>
<p>
	This is a tool I made for my team at The Escape Game to help consolidate our tribal knowledge.
	It's an MCP server that allows a team to submit the details of their code commits and other
	implementation notes to be queryable by their AI harnesses. Feel free to use it for your own team
	or personal projects.
</p>
<ul>
	<li>
		<a href="https://github.com/seanspradlin/bonfire">Source</a>
	</li>
</ul>
<h3>SaGa Retinue Builder</h3>
<p>
	The SaGa series is extremely niche has always had a place in my heart as being unreasonably obtuse
	in how to actually gain meaningful progression and then hits you with some extremely unfair
	difficulty spikes. There's barely any guides or documentation available for any of it. SaGa:
	Scarlet Grace was no exception.
</p>
<p>
	The purpose of this tool is to let you map out your ideal team, then figure out what roles they
	should have. Roles are unlocked by mastering certain skills, so this creates a to-do list of the
	skills you need to gain in order to satisfy the requirements.
</p>
<p>
	It becomes very useful after you reach the final boss and realize he always moves first, can stun
	your whole team every round, and is impervious to most of your usual strategies.
</p>
<ul>
	<li>
		<a href="https://github.com/seanspradlin/saga-retinue-builder">Source</a>
	</li>
	<li>
		<a href="https://saga-retinue-builder.vercel.app">SaGa Retinue Builder</a>
	</li>
</ul>
<h2>Blog</h2>
<ul>
	{#each data.blogs as blog (blog.slug)}
		<li><a href={resolve('/blog/[slug]', { slug: blog.slug })}>{blog.title}</a></li>
	{/each}
</ul>
