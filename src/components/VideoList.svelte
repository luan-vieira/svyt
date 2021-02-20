<script>
  import { searchResults } from "../stores.js";
  import VideoCard from "./VideoCard.svelte";
</script>

<ul class="video-list">
  {#each $searchResults as video (video.id)}
    <VideoCard {video} />
  {/each}
</ul>

<style>
  .video-list {
    display: grid;
    width: 100vw;
    grid-template-columns: repeat(5, 1fr);
  }
</style>
