<script>
	import { page } from '$app/stores';
    import { goto } from "$app/navigation";
    import { base } from '$app/paths';

	import {prompts, getPrompt, search} from '$lib/data/index.ts';

	import CardContainer from '$lib/cards/CardContainer.svelte';
	import Card from '$lib/cards/Card.svelte';

    // this is a fix for 404 without rewrite rules
    let redir = $page.url.searchParams.get('redir');
    console.log(redir);
    if (redir && redir.startsWith(base + '/prompt/')) {
        goto(redir);
    }

	let result = prompts;
	$: {
		let query = $page.url.searchParams.get('q');
		if (query) {
			result = search(query);
		}
	}

</script>

<svelte:head>
	<title>Roseta</title>
	<meta name="description" content="Generative AI Prompts" />
</svelte:head>

<section>
	{#if result.length > 0}
	<CardContainer>
		{#each result as prompt}
			<Card 
				id={prompt.id}
				title={prompt.title}
				image={prompt.image}
				prompt={prompt.prompt}
				tags={prompt.tags}
			></Card>
		{/each}
	</CardContainer>
	{:else}
		<div class="flex items-center justify-center h-screen">
			No results
	  	</div>
	{/if}
</section>

<style>
</style>
