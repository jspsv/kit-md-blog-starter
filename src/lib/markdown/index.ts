import { renderMarkdown } from './parser';

export const getMarkdownFrontmatter = async (fileName: string) => {
	const markdown = await renderMarkdown('# Heading 1');

	console.log(markdown);

	return {
		content: markdown
	};
};
