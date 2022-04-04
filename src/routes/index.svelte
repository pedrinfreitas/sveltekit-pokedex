<script lang="ts">
  import { pokemonAPI } from "../stores/pokestore";
</script>

<svelte:head>
  <title>Svelte kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte kit Pokedex</h1>

{#each $pokemonAPI as pokemon}
  <p>{pokemon.name}</p>
{/each}
