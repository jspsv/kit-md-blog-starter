import type { MarkdownContent, MarkdownFrontmatter } from '$lib/markdown/types';

// import.meta.glob() does not support string literals
const allMarkdownModules = import.meta.glob('../../../content/*/*.md');
const iterableMarkdownFiles = Object.entries(allMarkdownModules);

export const getPostsIndex = async (): Promise<MarkdownFrontmatter[]> => {
	const allMarkdownFrontmatter = await Promise.all(
		iterableMarkdownFiles.map(
			async ([path, resolver]: [string, Function]): Promise<MarkdownFrontmatter> => {
				const { Content } = await resolver();
				let { frontmatter }: { frontmatter: MarkdownFrontmatter } = await Content();

				frontmatter.category = path.split('/')[4];
				frontmatter.slug = path.split('/')[5].slice(0, -3);

				return frontmatter;
			}
		)
	);

	return allMarkdownFrontmatter;
};

export const getPostContent = async (fileSlug: string): Promise<MarkdownContent> => {
	const markdownResolver = allMarkdownModules[`../../../content/${fileSlug}.md`];

	const { Content } = await markdownResolver();
	const { html }: { html: MarkdownContent } = await Content();

	return html;
};
