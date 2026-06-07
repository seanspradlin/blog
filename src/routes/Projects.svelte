<section id="projects" class="my-16 lg:my-32">
	<h2 class="font-display text-3xl font-bold">Projects</h2>
	<hr class="mb-8" />
	<div class="flex flex-col gap-8 lg:flex-row">
		<div class="flex flex-col gap-8 rounded-xl bg-rp-surface p-8 shadow hover:shadow-lg">
			<h3 class="flex items-center gap-2 font-display text-2xl font-bold">
				<span class="icon-[ri--fire-fill] text-rp-rose"></span>
				Bonfire
			</h3>
			<div class="flex grow flex-col gap-4">
				<p>
					This is a tool I made for my team at The Escape Game to help consolidate our tribal
					knowledge. We are a small, fast-moving team and frequently self-deploy our changes. When
					someone is on PTO or busy elsewhere, we needed to be able to look up the notes on how to
					make changes.
				</p>
				<p>
					It's an MCP server that allows a team to submit the details of their code commits and
					other implementation notes to be queryable by their AI harnesses. It also has a portal for
					uploading hand-written notes and PDFs to be processed.
				</p>
				<p>
					When storing documentation, it uses semantic chunking through a RAG pipeline. When
					retrieving it, it performs cosine similarity to fetch the top results and then uses a
					reranker as a second pass filter.
				</p>
				<p>Feel free to use it for your own team or personal projects.</p>
			</div>
			<ul class="flex gap-4">
				<li>
					<a
						href="https://github.com/seanspradlin/bonfire"
						class="inline-block content-center rounded-lg border border-rp-muted px-4 py-1 font-display font-semibold shadow hover:bg-rp-iris hover:text-rp-surface"
						><div class="flex items-center gap-1">
							<span class="icon-[ri--github-fill]"></span>Source
						</div></a
					>
				</li>
			</ul>
		</div>
		<div class="flex flex-col gap-8 rounded-xl bg-rp-surface p-8 shadow hover:shadow-lg">
			<h3 class="flex items-center gap-2 font-display text-2xl font-bold">
				<span class="icon-[ri--sword-line] text-rp-pine"></span>SaGa Retinue Builder
			</h3>
			<div class="flex grow flex-col gap-4">
				<p>
					The SaGa series is extremely niche has always had a place in my heart as being
					unreasonably obtuse in how to actually gain meaningful progression and then hits you with
					some extremely unfair difficulty spikes. There's barely any guides or documentation
					available for any of it. SaGa: Scarlet Grace was no exception.
				</p>
				<p>
					The purpose of this tool is to let you map out your ideal team, then figure out what roles
					they should have. Roles are unlocked by mastering certain skills, so this creates a to-do
					list of the skills you need to gain in order to satisfy the requirements.
				</p>
				<p>
					It becomes very useful after you reach the final boss and realize he always moves first,
					can stun your whole team every round, and is impervious to most of your usual strategies.
				</p>
			</div>
			<ul class="flex gap-4">
				<li>
					<a
						href="https://github.com/seanspradlin/saga-retinue-builder"
						class="inline-block content-center rounded-lg border border-rp-muted px-4 py-1 font-display font-semibold shadow hover:bg-rp-iris hover:text-rp-surface"
					>
						<div class="flex items-center gap-1">
							<span class="icon-[ri--github-fill]"></span>Source
						</div></a
					>
				</li>
				<li>
					<a
						href="https://saga-retinue-builder.vercel.app"
						class="inline-block content-center rounded-lg border border-rp-muted px-4 py-1 font-display font-semibold shadow hover:bg-rp-iris hover:text-rp-surface"
						><div class="flex items-center gap-1">
							<span class="icon-[ri--sword-line]"></span>Use It
						</div></a
					>
				</li>
			</ul>
		</div>
	</div>
</section>
