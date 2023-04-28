<script lang="ts">
  import { base } from '$app/paths';
  import llm from '$lib/images/llm.png';
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
      
      <a href="{base}/prompt/{id}">
      {#if image != ""}
      <img src={image} alt="{prompt}" class="h-64 object-cover object-center w-full rounded-t-lg">      
      {:else}
      <img src={llm} alt="{prompt}" class="h-64 object-cover object-center w-full rounded-t-lg">      
      {/if}
      </a>
      
      <div class="p-4">
        <a href="{base}/prompt/{id}">
        <h2 class="text-base font-semibold text-gray-800 mb-2">{title}</h2>
        <p class="text-gray-700 font-mono text-xs text-ellipsis">
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
