import type { PageServerLoad } from './$types';
import type { MarkdownFrontmatter } from '$lib/markdown/types';
import { error } from '@sveltejs/kit';
import { getMarkdownFrontmatter } from '$lib/utils';

export const load = (async ({}) => {
	const postsIndex: MarkdownFrontmatter[] = [
		{
			slug: '/',
			title: 'test post',
			category: 'test',
			description: 'sdf',
			date: '2023-02-03',
			draft: true
		}
	];

	const postsIndex0 = await getMarkdownFrontmatter('someFile.md');

	if (!postsIndex.length) {
		throw error(400, 'No posts exist.');
	}

	return {
		postsIndex: postsIndex
	};
}) satisfies PageServerLoad;
