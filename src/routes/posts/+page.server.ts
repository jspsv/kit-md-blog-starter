import type { PageServerLoad } from './$types';
import type { PostMeta } from '$lib/markdown/types';
import { error } from '@sveltejs/kit';

export const load = (async ({}) => {
	const postsIndex: PostMeta[] = [
		{
			slug: '/',
			title: 'test post',
			category: 'test',
			description: 'sdf',
			date: '2023-02-03',
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
