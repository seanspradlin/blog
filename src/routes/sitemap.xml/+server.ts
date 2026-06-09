import type { RequestHandler } from './$types';
import { posts } from '$content';
import { SITE_URL } from '$lib/jsonld';

export const prerender = true;

type Entry = {
	path: string;
	lastmod?: string;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	priority: string;
};

/** Escape characters that are not legal inside an XML text node. */
function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: RequestHandler = () => {
	const staticPages: Entry[] = [
		{ path: '/', changefreq: 'weekly', priority: '1.0' },
		{ path: '/resume', changefreq: 'monthly', priority: '0.8' }
	];

	const postPages: Entry[] = posts.map((p) => ({
		path: p.permalink,
		lastmod: p.date,
		changefreq: 'yearly',
		priority: '0.7'
	}));

	const entries = [...staticPages, ...postPages];

	const urls = entries
		.map(({ path, lastmod, changefreq, priority }) => {
			const lastmodTag = lastmod ? `\n\t\t<lastmod>${lastmod}</lastmod>` : '';
			return `\t<url>
		<loc>${escapeXml(`${SITE_URL}${path}`)}</loc>${lastmodTag}
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
