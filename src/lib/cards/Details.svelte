<script lang="ts">
  import Label from '$lib/cards/Label.svelte';

  export let prompt;
</script>
  
<div class="w-full p-20">
      <div class="bg-white rounded-lg shadow-lg">
        
        {#if prompt.image != ""}
        <div class="w-full flex justify-center p-10">
          <img src={prompt.image} alt="{prompt.prompt}" class="flex h-64 rounded-t-lg">
        </div>
        {/if}
      
        <div class="p-4">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">{prompt.title}</h2>
          <p class="text-gray-700 font-mono">
            {@html prompt.prompt.replace(/\n/g, "<br />")}
          </p>
          
          {#if Object.keys(prompt.params).length > 0}
        <div class="flex justify-center mt-8 mb-2">
          <div class="overflow-x-auto shadow-md sm:rounded-lg w-2/5">
              <div class="inline-block min-w-full align-middle">
                  <div class="overflow-hidden ">
                      <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                          <thead class="bg-gray-100 dark:bg-gray-700">
                              <tr>
                                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                      Parameter
                                  </th>
                                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                      Value
                                  </th>
                              </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {#each Object.entries(prompt.params) as [key, value]}  
                              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                  <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{key}</td>
                                  <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{value}</td>
                              </tr>
                              {/each}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
      {/if}
          <p class="pt-4">
            {#each prompt.tags as tag}
              <Label tag={tag}></Label>
            {/each}
          </p>
          <p class="pt-4 text-sm text-gray-500">
            source: <a href="{prompt.source}" target="_blank">{prompt.source}</a>
          </p>
        </div>
      </div>
</div>
  
<style>
</style>