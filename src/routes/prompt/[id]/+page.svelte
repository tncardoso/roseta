<script>
    import Details from "$lib/cards/Details.svelte";

	export let data;
</script>

<svelte:head>
	<title>Roseta</title>
	<meta name="description" content="Roseta Details" />
</svelte:head>

<div class="text-column">
	<Details prompt={data}></Details>
</div>
