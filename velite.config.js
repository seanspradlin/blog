import { defineConfig, s } from 'velite';

export default defineConfig({
	output: {
		assets: 'static/static',
		base: '/static/'
	},
	collections: {
		posts: {
			name: 'Post',
			pattern: 'posts/**/*.md',
			schema: s
				.object({
					title: s.string().max(99),
					slug: s.path(),
					date: s.isodate(),
					cover: s.image(),
					video: s.file().optional(),
					metadata: s.metadata(),
					excerpt: s.excerpt(),
					content: s.markdown()
				})
				.transform((data) => {
					const slug = data.slug.split(/[\\/]/).pop() ?? data.slug;
					return { ...data, slug, permalink: `/blog/${slug}` };
				})
		}
	}
});
