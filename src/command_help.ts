import type { CLICommand } from "./state.js";
import { type State } from "./state.js";

export function commandHelp(state: State): void {
    console.log("Welcome to the Pokedex!"); 
    console.log("Usage: ");
    for (let key of  Object.keys(state.commands)) {
        console.log(`${state.commands[key].name}: ${state.commands[key].description}`);
    }
}