<script lang="ts">
	import PostTitle from '$lib/components/PostTitle.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<PostTitle metadata={data.postMeta} />
	{@html data.postContent.content}
</div>
