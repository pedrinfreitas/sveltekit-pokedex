<script lang="ts">
  export let pokemon;
</script>

<a
  class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
  href={`/pokemon/${pokemon.id}`}
>
  <img src={pokemon.image} alt={pokemon.name} height="96" width="96"/>
  <h2>{pokemon.id}. {pokemon.name}</h2>
</a>
