import type { HighlighterOptions } from 'shiki';
import { visit } from 'unist-util-visit';
import { getHighlighter } from 'shiki';

const remarkShiki = async (shikiOptions: HighlighterOptions) => {
	const highlighter = await getHighlighter(shikiOptions);

	return () => (tree: any) => {
		visit(tree, 'code', (node) => {
			//

			const lang = 'plaintext';
			const highlighted = highlighter.codeToHtml(node.value, { lang });

			node.type = 'html';
			node.value = highlighted;
			node.children = [];
		});
	};
};

export default remarkShiki;
