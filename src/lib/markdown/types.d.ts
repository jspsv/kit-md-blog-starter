// meta data of a post
export interface PostMeta {
	slug: string;
	category: string;
	title: string;
	description: string;
	date: string;
	dateUpdated?: string;
	draft: boolean;
}

// post data
export interface PostContent {
	category: string;
	title: string;
	description: string;
	date: string;
	dateUpdated?: string;
	draft: boolean;
	content: string;
}
