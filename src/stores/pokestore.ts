import { writable } from "svelte/store";
import type { IPokemonAPI } from "./pokestore.model";

export const pokemonAPI = writable([]);

const fetchPokemonAPI = async () => {
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
  pokemonAPI.set(loadedPokemon);
};

fetchPokemonAPI();
