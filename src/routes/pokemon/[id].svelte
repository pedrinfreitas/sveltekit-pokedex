<script context="module" lang="ts">
  export const load = async ({ params }) => {
    const { id } = params;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);

    const pokemonDetails = await res.json();

    return {
      props: {
        pokemonDetails,
      },
    };
  };
</script>

<script lang="ts">
  import type { RootObject } from "src/stores/pokestore.model";

  export let pokemonDetails: RootObject;
  const types = pokemonDetails.types.map((e) => e.type.name);
</script>

<svelte:head>
  <title>Svelte kit Pokedex - {pokemonDetails.name}</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">{pokemonDetails.name}</h1>
<div class="flex flex-col items-center">
  <p class="type">
    Type:
    {#each types as type}
      <strong>{type}</strong>
    {/each}
  </p>
  <p>
    <strong />Heigth:
    <strong>{pokemonDetails.height}</strong>
    | Weigth: <strong>{pokemonDetails.weight}</strong>
  </p>

  <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
</div>

<style>
  .type strong:before {
    content: " #";
  }
</style>
