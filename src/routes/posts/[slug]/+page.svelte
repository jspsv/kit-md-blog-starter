<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<PostCard metadata={data.postMeta} />
	{@html data.postContent.content}
</div>
