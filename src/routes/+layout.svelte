<script lang="ts">
	import '$lib/styles/main.css';
</script>

<div
	class="
  mx-auto flex 
  min-h-screen w-full max-w-3xl 
  flex-col
  bg-slate-200 
  px-2
  "
>
	<nav
		class="
    my-4 flex space-x-2
    px-2 
    text-xl
    font-bold
    "
	>
		<a href="/">Home</a>
		<a href="/posts">Posts</a>
	</nav>

	<main class="px-2">
		<slot />
	</main>
</div>
