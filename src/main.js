import { getPokemon } from './api.js';
import * as UI from './ui.js';
import * as db from './storage.js';

const init = async () => {
    const favorits = db.llistar();
    UI.renderLlista(favorits);
};

document.querySelector("#form-cerca").addEventListener("submit", async (e) => {
    e.preventDefault();
    const dades = await getPokemon(e.target.pokemon.value);
    UI.pintarCard(dades);
});

init();