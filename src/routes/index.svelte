<script context="module" lang="ts">
  export const load = async ({ params }) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data: IPokemonAPI = await res.json();

    const loadedPokemon = data.results.map((e, i) => {
      return {
        name: e.name,
        id: i + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          i + 1
        }.png`,
        imageShiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
          i + 1
        }.png`,
      };
    });

    return {
      props: {
        pokemonAPI: loadedPokemon,
      },
    };
  };
</script>

<script lang="ts">
  import Card from "$lib/Card.svelte";
import type { IPokemonAPI } from "src/stores/pokestore.model";
  //import { pokemonAPI } from "../stores/pokestore";
  export let pokemonAPI;
  let search = "";
  let filteredPokemon = [];

  $: {
    if (search) {
      filteredPokemon = pokemonAPI.filter((e) =>
        e?.name?.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      filteredPokemon = [...pokemonAPI];
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
