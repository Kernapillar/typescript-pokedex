import { type State } from "./state.js";


export async function commandPokedex(state: State, pName: string): Promise<void> {
    console.log("Your Pokeded: ")
    for (const pokemon of Object.keys(state.pokedex)) {
        console.log(` - ${pokemon}`)
    };
    
};