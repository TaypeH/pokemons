import { getPokemonList } from "../services/pokeapi.js";

export async function pokemonsPage(app) {
    app.innerHTML = `<h2>Loading pokemons...</h2>`

    const pokemons = await getPokemonList(16);

    const cards = pokemons.map((poke, index) => `
        <div class="card">
            <a href="#/pokemons/${index + 1}">${poke.name}</a>
        </div>
    `).join('');

    app.innerHTML = /*html*/ `
        <section>
            <h2>Pokemons List</h2>
            <div class="list">${cards}</div>
        </section>
    `;
}
