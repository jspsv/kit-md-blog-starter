<script lang="ts">
	import type { PostMeta } from '$lib/markdown/types';
	export let metadata: PostMeta;
</script>

<a href={metadata.slug}>
	<h3>{metadata.title}</h3>
	<h3>{metadata.category}</h3>
	<h3>{metadata.date}</h3>
	<h3>{metadata.dateUpdated}</h3>
	<h3>{metadata.description}</h3>
	<h3>{metadata.draft}</h3>
</a>
