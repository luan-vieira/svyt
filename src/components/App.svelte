<script>
	import SearchBar from "./SearchBar.svelte";
	import VideoList from "./VideoList.svelte";
</script>

<main>
	<h1>Hello, Jack!</h1>
	<p>Welcome to Earf</p>
	<SearchBar />
	<VideoList />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
