<script lang="ts">
	import type { MarkdownFrontmatter } from '$lib/markdown/types';
	export let metadata: MarkdownFrontmatter;
</script>

<div class="bg-blue-200 py-4">
	<h3>{metadata.title}</h3>
	<h3>{metadata.category}</h3>
	<h3>{metadata.tags}</h3>
	<h3>{metadata.date}</h3>
	<h3>{metadata.dateUpdated}</h3>
	<h3>{metadata.description}</h3>
	<h3>{metadata.draft}</h3>
</div>
