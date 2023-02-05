// post frontmatter
export interface MarkdownFrontmatter {
	slug: string;
	category: string;
	title: string;
	description: string;
	date: string;
	dateUpdated?: string;
	tags?: string[];
	draft: boolean;
}

// post data
export interface MarkdownContent {
	content: string;
}
