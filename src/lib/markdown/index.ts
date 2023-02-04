import { renderMarkdown } from './parser';

export const getMarkdownFrontmatter = async (fileName: string) => {
	const markdown = await renderMarkdown('<h1>Heading 1<h1>');

	return {
		content: markdown
	};
};
