<script>
  import { searchResults, searchTerm } from "../stores.js";
  import search from "../youtubeSearch";
  const YB_API_KEY = "AIzaSyCkAD_p5n6ceaLV-6zMg_0ZfTu1yT9J1Pk"; // heh :devil:

  const opts = {
    maxResults: 10,
    key: YB_API_KEY,
  };

  const videoSearch = () => {
    search($searchTerm, opts, (err, results) => {
      if (err) return console.error(err);
      searchResults.set(results);
    });
  };
</script>

<div class="search-bar">
  <input bind:value={$searchTerm} on:change={videoSearch} />
</div>

<style>
  .search-bar {
    margin: 20px;
    text-align: center;
  }

  .search-bar input {
    width: 75%;
  }
</style>
