import { renderMarkdown, extractFrontmatterAndContent } from '../markdown';

export default function vitePlugin(userOptions = {}) {
	return {
		name: 'vite-plugin-remd',

		encforce: 'pre',

		async transform(src, id) {
			if (id.endsWith('.md')) {
				// extract frontend and content
				const rawData = extractFrontmatterAndContent(src);

				// pass the content string to markdown
				const frontmatter = rawData?.data;
				const renderResult = await renderMarkdown(rawData?.content);
				const content = renderResult.html;

				// console.log(content);
				// console.log(frontmatter);

				// const code = `
				// export const html = ${JSON.stringify(content)}
				// export const frontmatter = ${JSON.stringify(frontmatter)}
				// `;

				// return {
				// 	code
				// };

				return {
					code: `export default ${JSON.stringify(content)}`
				};
			}
		}
	};
}
