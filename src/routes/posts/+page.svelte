<script lang="ts">
	import type { PageData } from './$types';
	import PostSummary from '$lib/components/PostSummary.svelte';

	export let data: PageData;
</script>

<div>
	<h1>Posts</h1>

	<ol class="space-y-4">
		{#each data.postsIndex as metadata}
			<PostSummary {metadata} />
		{/each}
	</ol>
</div>
