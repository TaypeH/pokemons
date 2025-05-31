const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getPokemonList = async (limit = 20, offset = 0) => {
    const result = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    const data = await result.json();
    const pokemons = data.results;

    return pokemons;
}

export const getPokemonById = async (id) => {
    const result = await fetch(`${BASE_URL}/pokemon/${id}`);
    const pokemon = await result.json();

    return pokemon;
}

