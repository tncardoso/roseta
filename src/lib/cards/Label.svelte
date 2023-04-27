<script lang="ts">
    import {search} from '$lib/routes';

    export let tag;
</script>
  
<span on:click={() => search('tags:'+tag)} class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200 uppercase last:mr-0 mr-1">
    {tag}
</span>
  
<style>
</style>