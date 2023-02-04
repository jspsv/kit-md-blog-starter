import { unified } from 'unified';
import { VFile } from 'vfile';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import smartypants from 'remark-smartypants';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';

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

export const renderMarkdown = async (content: string) => {
	// TODO: provide path (fileURL)
	const input = new VFile({ value: content });

	// build parser
	const parser = unified()
		.use(remarkParse)
		.use(remarkFrontmatter)
		.use(remarkGfm)
		.use(smartypants)
		.use(remarkRehype)
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
};
