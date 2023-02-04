import type { MarkdownFrontmatter } from '$lib/markdown/types';

export const getMarkdownFrontmatter = async (fileName: string): Promise<MarkdownFrontmatter> => {
	// dynamic import
	const { Content } = await import(fileName);
	const { frontmatter } = await Content();

	// console.log(frontmatter);

	return frontmatter;
};
