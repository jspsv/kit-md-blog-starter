import { renderMarkdown } from '$lib/markdown';
import myMarkdown from '../../../content/portfolio/001-11ty-blog.md';

export const getMarkdownFrontmatter = async (fileName: string) => {
	const markdown = await renderMarkdown('# Heading 1');

	// console.log(markdown);

	// console.log(code);
	console.log(myMarkdown);

	return {
		content: markdown
	};
};
