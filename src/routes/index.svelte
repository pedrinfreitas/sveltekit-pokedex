<script lang="ts">
  import Card from "$lib/Card.svelte";
  import { pokemonAPI } from "../stores/pokestore";
</script>

<svelte:head>
  <title>Svelte kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte kit Pokedex</h1>

<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
  {#each $pokemonAPI as pokemon}
    <Card {pokemon} />
  {/each}
</div>
