import { renderMarkdown, extractFrontmatterAndContent } from '../markdown';

export default function vitePlugin(userOptions = {}) {
	return {
		name: 'vite-plugin-remd',

		encforce: 'pre',

		async transform(src: string, id: string) {
			if (id.endsWith('.md')) {
				// extract frontend and content
				const rawData = extractFrontmatterAndContent(src);

				// pass the content string to markdown
				const frontmatter = rawData?.data;
				const renderResult = await renderMarkdown(rawData?.content);
				const content = { content: renderResult.html };

				const code = `
        export async function Content() {
          return {
            html: ${JSON.stringify(content)}, 
            frontmatter: ${JSON.stringify(frontmatter)}
          }
        }
        export default Content;
				`;

				return {
					code
				};
			}
		}
	};
}
