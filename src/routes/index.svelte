<script lang="ts">
  import Card from "$lib/Card.svelte";
  import { pokemonAPI } from "../stores/pokestore";

  let search = "";
  let filteredPokemon = [];

  $: {
    if (search) {
        filteredPokemon = $pokemonAPI.filter((e) =>
        e?.name?.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      filteredPokemon = [...$pokemonAPI];
    }
  }
</script>

<svelte:head>
  <title>Svelte kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte kit Pokedex</h1>
<input
  bind:value={search}
  type="text"
  class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
  placeholder="Search Pokemon"
/>

<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
  {#each filteredPokemon as pokemon}
    <Card {pokemon} />
  {/each}
</div>
