<script>
	import YTSearch from "youtube-api-search";

	const YB_API_KEY = "AIzaSyDa0D7UfyGESqovX4-x-YQxvAhe2l08Pr4"; // heh :devil:
	const YB_API_BASE_URI = "https://www.googleapis.com/youtube/v3";

	YTSearch({ key: YB_API_KEY, term: "puppy" }, (videos) => {
		console.log(videos);
	});
</script>

<main>
	<h1>Hello, Jack!</h1>
	<p>Welcome to Earf</p>
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
