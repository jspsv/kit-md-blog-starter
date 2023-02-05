import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPostContent } from '$lib/utils';

export const load = (async ({ parent, params }) => {
	const { postsIndex } = await parent();
	const postMeta = postsIndex.find(({ slug }) => slug === params.slug);

	const postContent = await getPostContent(`${postMeta?.category}/${params.slug}`);

	if (!postContent) {
		throw error(400, 'No posts exist.');
	}

	return {
		postMeta,
		postContent
	};
}) satisfies PageServerLoad;
