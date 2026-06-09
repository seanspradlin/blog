<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Resume — Sean Spradlin</title>
	<meta
		name="description"
		content="Sean Spradlin's professional resume detailing experience, skills, and accomplishments."
	/>
</svelte:head>

<main class="container mx-auto max-w-[80ch] p-4">
	<a href={resolve('/')} class="mb-6 inline-block text-sm text-gray-500 hover:text-gray-700"
		>&larr; Home</a
	>
	<div class="text-center font-display">
		<h1 class="text-4xl font-black text-rp-pine">Sean Spradlin</h1>
		<p class="text-rp-muted">Software Engineer | Technical Lead</p>
	</div>
	<div class="mx-auto mt-8">
		<h2 class="font-display text-3xl font-bold text-rp-foam">Summary</h2>
		<p class="text-justify leading-snug">
			Generalist software engineer with a track record of taking products and platforms from concept
			to scale. Experienced in establishing engineering foundations, defining technical direction,
			and collaborative practices that enable organizations to grow while remaining hands-on across
			the software lifecycle.
		</p>
	</div>
	<div class="mt-8">
		<h2 class="font-display text-3xl font-bold text-rp-foam">Skills</h2>
		<dl class="tracking-snug grid grid-cols-[max-content_1fr] gap-3 leading-snug">
			<dt class="font-display font-semibold">Languages & Frameworks:</dt>
			<dd>TypeScript, Node.js, React, Next.js, Svelte, NestJS, Python, C#, Godot</dd>
			<dt class="font-display font-semibold">Infrastructure:</dt>
			<dd>Terraform, AWS, Docker, Postgres, Redis, GitHub Actions, Snowflake</dd>
			<dt class="font-display font-semibold">Architecture:</dt>
			<dd>Containerization, Distributed Systems, API Design, MCP Servers, Edge Deployments</dd>
		</dl>
	</div>
	<div class="mt-8">
		<h2 class="font-display text-3xl font-bold text-rp-foam">Experience</h2>
		<div>
			<h3 class="font-display text-xl font-semibold text-rp-rose">Tech Lead | The Escape Game</h3>
			<p class="font-semibold">December 2021 - Present</p>
			<ul class="tracking-snug ml-6 flex list-disc flex-col gap-2 text-justify leading-snug">
				<li>
					Led the technical strategy, architecture, and implementation of Great Big Game Show - a
					greenfield business unit now operating in 20 standalone locations and growing. Designed
					the platform ecosystem including the core game experience, hardware integration, content
					distribution, application versioning, and store operations.
				</li>
				<li>
					Established an AI-enabled knowledge platform by creating an MCP server and RAG pipeline to
					centralize technical documentation, allowing AI tooling to quickly gather context across
					services.
				</li>
				<li>
					Gained customer insights by creating the internal guest-tracking tool for both of the
					company&apos;s major business units to track operational performance and help tailor
					repeat guest experiences.
				</li>
				<li>
					Laid the foundations of internal operating system to allow in-store employees to track
					bookings, run games, submit issues, and view reports while also gathering insights about
					guests and their experiences.
				</li>
				<li>
					Established foundations of analytics architecture by centralizing business-critical data
					in Snowflake and developing the ingestion pipelines from third-party integrations.
				</li>
				<li>
					Professionalized the development team by establishing code review standards, mentoring
					engineers, laying the groundwork for CI/CD practices, and managing infrastructure as code
					with Terraform.
				</li>
				<li>
					Led the modernization effort of the company&apos;s marketing platform by defining the
					migration strategy to Next.js and Sanity CMS to improve search visibility, accessibility,
					and performance.
				</li>
				<li>
					Accelerated guest onboarding by building a waiver flow with SvelteKit to reduce check-in
					time between game sessions by several minutes.
				</li>
			</ul>
		</div>
		<div class="mt-4">
			<h3 class="font-display text-xl font-semibold text-rp-rose">
				Senior Software Engineer | City National Bank (Exactuals)
			</h3>
			<p class="font-semibold">February 2018 - December 2021</p>
			<ul class="tracking-snug ml-6 flex list-disc flex-col gap-2 text-justify leading-snug">
				<li>
					Created a more complete picture of music metadata by building an ETL pipeline to ingest
					various sources of music metadata and creating canonical records as part of the R.AI
					project.
				</li>
				<li>
					Built a customer-facing portal to browse the company&apos;s music metadata catalog with
					Next.js and Elasticsearch.
				</li>
				<li>
					Designed, developed, and deployed the music metadata API as a service enabling businesses
					to improve their own data quality by querying against our dataset.
				</li>
				<li>
					Conducted code reviews and mentored engineers, established CI/CD, and drove agile adoption
					as scrum master.
				</li>
			</ul>
		</div>
		<div class="mt-4">
			<h3 class="font-display text-xl font-semibold text-rp-rose">
				Senior Software Engineer | eviCore Healthcare
			</h3>
			<p class="font-semibold">September 2017 - January 2018</p>
			<ul class="tracking-snug ml-6 flex list-disc flex-col gap-2 text-justify leading-snug">
				<li>
					Enabled operations teams to manage service configurations in real time through Redis with
					an intuitive interface without needing to put in support tickets.
				</li>
			</ul>
		</div>
		<div class="mt-4">
			<h3 class="font-display text-xl font-semibold text-rp-rose">
				Software Engineer | Smartvue Corporation
			</h3>
			<p class="font-semibold">June 2015 - September 2017</p>
			<ul class="tracking-snug ml-6 flex list-disc flex-col gap-2 text-justify leading-snug">
				<li>
					Unified user experience by creating a REST API to serve as a translation layer between
					front-end applications and the various makes and models of supported hardware.
				</li>
				<li>
					Secured video data at rest by creating an encryption pipeline into Azure Blob Storage.
				</li>
				<li>Mentored junior engineers on security and system design.</li>
			</ul>
		</div>
		<div class="mt-4">
			<h3 class="font-display text-xl font-semibold text-rp-rose">
				Software Engineer | TrakRef LLC
			</h3>
			<p class="font-semibold">February 2014 - March 2015</p>
			<ul class="tracking-snug ml-6 flex list-disc flex-col gap-2 text-justify leading-snug">
				<li>
					Reduced process friction at refrigerant recycling plants by automating inventory tracking
					through an ASP.NET interface that replaced manual Excel workflows.
				</li>
			</ul>
		</div>
		<div class="mt-8">
			<h2 class="font-display text-3xl font-bold text-rp-foam">Education</h2>
			<p class="leading-snug">
				Bachelor of Science in Secondary Education<br />
				University of South Alabama - Mobile, AL<br />
				Summer 2010
			</p>
		</div>
	</div>
</main>
