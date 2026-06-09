export const SITE_URL = 'https://seanspradlin.com';

/** Reusable Person node, referenced by @id across schemas. */
export const PERSON_ID = `${SITE_URL}/#person`;

export const person = {
	'@type': 'Person',
	'@id': PERSON_ID,
	name: 'Sean Spradlin',
	url: SITE_URL,
	jobTitle: 'Software Engineer',
	description:
		'Nashville-based software engineer and technical lead, building side projects and writing brain dumps.',
	sameAs: ['https://github.com/seanspradlin', 'https://www.linkedin.com/in/seanthomasspradlin/']
};

/**
 * Serializes a schema object into a `<script type="application/ld+json">` tag
 * for use with `{@html}` inside `<svelte:head>`. The `<` escaping prevents
 * any `</script>` sequence in the data from breaking out of the tag.
 */
export function jsonLdScript(schema: unknown): string {
	const json = JSON.stringify(schema).replace(/</g, '\\u003c');
	return `<script type="application/ld+json">${json}</script>`;
}
