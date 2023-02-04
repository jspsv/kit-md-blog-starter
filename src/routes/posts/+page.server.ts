import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { MarkdownFrontmatter } from '$lib/markdown/types';
import { getMarkdownFrontmatter } from '$lib/utils';

export const load = (async ({}) => {
	const aPostFrontmatter = await getMarkdownFrontmatter(
		'../../../content/portfolio/001-11ty-blog.md'
	);

	const postsIndex: MarkdownFrontmatter[] = [
		{
			slug: '/',
			title: aPostFrontmatter.frontmatter.title,
			category: aPostFrontmatter.frontmatter.category,
			description: aPostFrontmatter.frontmatter.description,
			date: aPostFrontmatter.frontmatter.date,
			dateUpdated: aPostFrontmatter.frontmatter.dateUpdated,
			tags: aPostFrontmatter.frontmatter.tags,
			draft: true
		},
		{
			slug: '/',
			title: aPostFrontmatter.frontmatter.title,
			category: aPostFrontmatter.frontmatter.category,
			description: aPostFrontmatter.frontmatter.description,
			date: aPostFrontmatter.frontmatter.date,
			dateUpdated: aPostFrontmatter.frontmatter.dateUpdated,
			tags: aPostFrontmatter.frontmatter.tags,
			draft: true
		}
	];

	if (!postsIndex.length) {
		throw error(400, 'No posts exist.');
	}

	return {
		postsIndex: postsIndex
	};
}) satisfies PageServerLoad;
