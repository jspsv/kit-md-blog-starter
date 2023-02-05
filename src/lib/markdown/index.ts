import { unified } from 'unified';
import { VFile } from 'vfile';
import remarkParse from 'remark-parse';
import smartypants from 'remark-smartypants';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import matter from 'gray-matter';

import remarkShiki from './remark-shiki';

// unified

// remark-parse
// remark-frontmatter (TODO: add check to make frontmatter follow a schema)
// remark-gfm
// remark-smartypants

// TODO: other remark plugins

// TODO: add code highlight here

// TODO: resolve relative image paths

// remark-rehype
// rehypeHeadingIds (TODO:)
// rehype-raw
// rehype-stringify

// then process input

export async function renderMarkdown(content: string | undefined) {
	// TODO: provide path (fileURL)
	const input = new VFile({ value: content });

	// transform markdown
	let parser = unified().use(remarkParse).use(remarkGfm).use(smartypants);

	// create shiki highlighter and pass it to the plugin
	// const highlighter = await getHighlighter({ theme: 'nord' });
	// parser.use(remarkShiki, { highlighter });
	const highlighterOpts = { theme: 'nord' };
	parser.use([await remarkShiki(highlighterOpts)]);

	// transform html
	parser
		.use(remarkRehype)
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings)
		.use(rehypeRaw)
		.use(rehypeStringify);

	let vfile;
	try {
		vfile = await parser.process(input);
	} catch (err) {
		console.error(err);
		throw err;
	}

	return {
		html: String(vfile.value),
		vfile
	};
}

export function extractFrontmatterAndContent(source: string) {
	try {
		return matter(source);
	} catch (error) {
		// TODO: check if front matter follows defined schema
		console.error(error);
	}
}
