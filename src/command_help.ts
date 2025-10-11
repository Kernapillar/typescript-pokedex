import type { CLICommand } from "./state.js";
import { type State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
    console.log("Welcome to the Pokedex!"); 
    console.log("Usage: ");
    for (let key of  Object.keys(state.commands)) {
        console.log(`${state.commands[key].name}: ${state.commands[key].description}`);
    }
}