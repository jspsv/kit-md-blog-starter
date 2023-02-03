<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from '$lib/components/PostCard.svelte';

	export let data: PageData;
</script>

<div>
	<h1>Posts</h1>

	{#each data.postsIndex as metadata}
		<PostCard {metadata} />
	{/each}
</div>
