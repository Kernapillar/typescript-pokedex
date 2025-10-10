import type { CLICommand } from "./command";

export function commandHelp(commands: Record<string, CLICommand>): void {
    console.log("Welcome to the Pokedex!"); 
    console.log("Usage: ");
    for (let key of  Object.keys(commands)) {
        console.log(`${commands[key].name}: ${commands[key].description}`);
    }
}