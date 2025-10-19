import { type State } from "./state.js";


export async function commandCatch(state: State, pName: string): Promise<void> {
    console.log(`Throwing a Pokeball at ${pName}...`);
    const pokemonData = await state.api.fetchPokemon(pName); 
    const difficultyModifier = (pokemonData.base_experience * 0.1) + 35;
    const catchRoll = Math.random() * 100; 
    if (catchRoll > difficultyModifier) {
        console.log(`${pName} was caught!`);
        state.pokedex[pName] = pokemonData;
    } else {
        console.log(`${pName} escaped!`);
    };
};