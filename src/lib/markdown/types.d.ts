// meta data of a post
export interface MarkdownFrontmatter {
	slug: string;
	category: string;
	title: string;
	description: string;
	date: string;
	dateUpdated?: string;
	draft: boolean;
}

// post data
export interface MarkdownContent {
	category: string;
	title: string;
	description: string;
	date: string;
	dateUpdated?: string;
	draft: boolean;
	content: string;
}
