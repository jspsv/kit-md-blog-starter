import type { MarkdownFrontmatter } from '$lib/markdown/types';

export const getPostsIndex = async (contentDir: string) => {
	// const allMarkdownFiles = await import.meta.glob(`${contentDir}/dev/*.md`);
	const allMarkdownFiles = import.meta.glob(`../../../content/*/*.md`);
	const iterableMarkdownFiles = Object.entries(allMarkdownFiles);

	const allPostsFrontmatter = await Promise.all(
		iterableMarkdownFiles.map(
			async ([path, resolver]: [string, Function]): Promise<MarkdownFrontmatter> => {
				const { Content } = await resolver();
				const { frontmatter } = await Content();

				return frontmatter;
			}
		)
	);

	return allPostsFrontmatter;
};
