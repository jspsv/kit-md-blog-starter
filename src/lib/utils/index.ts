export const getMarkdownFrontmatter = async (fileName: string) => {
	// dynamic import
	const { Content } = await import(fileName);
	const { frontmatter } = await Content();

	// console.log(frontmatter);

	return {
		frontmatter
	};
};
