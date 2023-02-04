import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { MarkdownFrontmatter } from '$lib/markdown/types';
import { getMarkdownFrontmatter } from '$lib/utils';

export const load = (async ({}) => {
	const postsIndex: MarkdownFrontmatter[] = await Promise.all([
		getMarkdownFrontmatter('../../../content/portfolio/001-11ty-blog.md'),
		getMarkdownFrontmatter('../../../content/dev/001-post.md')
	]);

	if (!postsIndex.length) {
		throw error(400, 'No posts exist.');
	}

	return {
		postsIndex: postsIndex
	};
}) satisfies PageServerLoad;
