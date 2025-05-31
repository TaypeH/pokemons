import { getPokemonById } from "../services/pokeapi.js";
import { addRecentPokemon } from "../storage/recent.js";

export async function pokemonDetailsPage(app, id) {
    app.innerHTML = `<h2>Loading pokemon...</h2>`

    const existPokemon = await getPokemonById(id);
    addRecentPokemon(existPokemon.name);

    const abilities = existPokemon.abilities.map(ability => ability.ability.name).join(', ');
    const forms = existPokemon.forms.map(form => form.name).join(', ');

    app.innerHTML = /*html */ `
        <section>
            <div class="card-details">
                <h2>${existPokemon.name}</h2>
                <img src="${existPokemon.sprites.front_default}" alt="${existPokemon.name}" height=180 />
                <p>Weight: <span>${existPokemon.weight}</span></p>
                <p>Height: <span>${existPokemon.height}</span></p>
                <p>Abilities: <span>${abilities}</span></p>
                <p>Forms: <span>${forms}</span></p>
                </div>
            <a href="#/pokemons">Back to pokemons</a>
        </section>
    `;
}
