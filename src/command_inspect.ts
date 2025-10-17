import { type State } from "./state.js";


export async function commandInspect(state: State, pName: string): Promise<void> {
    if (state.pokedex[pName] === undefined) {
        console.log(`you have not caught that pokemon`);
        return;
    }
    const pokemon = state.pokedex[pName]
    console.log(`Name: ${pokemon.name}`)
    console.log(`Height: ${pokemon.height}`)
    console.log(`Weight: ${pokemon.weight}`)
    console.log(`Stats: `)
    for (const statKey of Object.keys(pokemon.stats)) {
        console.log(` - ${statKey}: ${pokemon.stats[statKey]}`)
    }
    console.log(`Types: `)
    for (const type of pokemon.types) {
        console.log(` - ${type}`)
    }
    
}