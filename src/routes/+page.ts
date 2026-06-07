import type { PageLoad } from './$types';
import { posts } from '$content';

export const load: PageLoad = () => {
	return {
		blogs: posts.map((p) => ({
			title: p.title,
			slug: p.slug,
			date: p.date,
			excerpt: p.excerpt,
			readingTime: p.metadata.readingTime
		}))
	};
};
