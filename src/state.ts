import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";
import { PokeAPI, pokemonData } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string; 
    callback: (state: State, ...args: string[]) => Promise<void>; 
};

export type State = {
    rl: Interface; 
    commands: Record <string, CLICommand>;
    api: PokeAPI;
    nextLocationsURL: string;
    prevLocationsURL: string;
    pokedex: Record<string, pokemonData>;
}

export function initState(): State {
    const newInterface = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    const newCommands = getCommands();

    return {
        rl: newInterface, 
        commands: newCommands, 
        api: new PokeAPI, 
        nextLocationsURL: "",
        prevLocationsURL: "",
        pokedex: {}
    }
    
}