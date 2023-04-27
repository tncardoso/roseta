<script lang="ts">
  import { base } from '$app/paths';

  import Label from '$lib/cards/Label.svelte';

  export let id;
  export let title;
  export let image;
	export let prompt;
  export let tags;

  function truncate(text) {
    const max = 80;
    if (text.length > max) {
      return text.slice(0, max) + '...';
    } else {
      return text;
    }
  }
</script>

<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6 p-2">
    <div class="bg-white rounded-lg shadow-lg">
      
      {#if image != ""}
      <a href="{base}/prompt/{id}">
      <img src={image} alt="{prompt}" class="w-full rounded-t-lg">
      </a>
      {/if}
      
      <div class="p-4">
        <a href="/prompt/{id}">
        <h2 class="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p class="text-gray-700 font-mono text-xs">
          {truncate(prompt)}
        </p>
        </a>
        <p class="pt-4">
          {#each tags as tag}
            <Label tag={tag}></Label>
          {/each}
        </p>
      </div>
    </div>
</div>

<style>
</style>
