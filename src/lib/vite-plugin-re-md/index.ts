import { renderMarkdown } from '../markdown';

export default function vitePlugin(userOptions = {}) {
	return {
		name: 'vite-plugin-remd',

		encforce: 'pre',

		async transform(src, id) {
			if (id.endsWith('.md')) {
				// 1. Extract frontend and content (using gray-matter)
				// 2. Pass the content string to markdown
				const code = `${JSON.stringify(src.toString('utf-8'))}`;

				const renderResult = await renderMarkdown(src);
				const html = renderResult.html;

				// const code = 'some content';
				// const frontmatter = {
				// 	title: 'Cool title',
				// 	tags: 'Typescript'
				// };
				// console.log(frontmatter);

				console.log(html);

				// return { code, frontmatter };

				return { code };
			}
		}

		// async transform(src, id) {
		// 	if (id.endsWith('.md')) {
		// 		const parser = getMdParser();

		// 		const htmlContent = await parser.process('# Heading 1');

		// 		return {
		// 			code: `export default ${JSON.stringify(htmlContent.toString('utf8'))}`,
		// 			map: { mappings: '' }
		// 		};
		// 	}
		// }

		// async transform(src, id) {
		// 	if (id.endsWith('.md')) {
		// 		console.error('got .md file');
		// 	}

		// 	const html = '<h1>Heading 1</h1>';

		// 	const code = `export default ${JSON.stringify(html)}`;

		// 	return {
		// 		code
		// 	};
		// }
	};
}
