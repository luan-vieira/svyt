<script>
  import { selectedVideo } from "../stores.js";
  export let video;
</script>

<div on:click={() => selectedVideo.set(video)} class="video-card">
  <img class="thumbnail" alt="thumbnail" src={video.thumbnails.default.url} />
  <div class="video-details">{video.title}</div>
</div>

<style>
  .video-card {
    grid-column: 2 / 5;
    align-items: center;
    justify-content: flex-start;
    padding: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .video-card:hover {
    -webkit-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .thumbnail {
    grid-column: 2 / 3;
    border-radius: 5px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .video-details {
    margin: 0 0 0 10rem;
  }
</style>
