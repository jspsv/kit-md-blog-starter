import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPostsIndex } from '$lib/utils';

export const load = (async ({}) => {
	const postsIndex = await getPostsIndex();

	if (!postsIndex.length) {
		throw error(400, 'No posts exist.');
	}

	return {
		postsIndex: postsIndex
	};
}) satisfies LayoutServerLoad;
