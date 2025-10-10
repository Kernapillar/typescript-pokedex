import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";

export type CLICommand = {
    name: string;
    description: string; 
    callback: (state: State) => void; 
};

export type State = {
    rl: Interface; 
    commands: Record <string, CLICommand>;
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
        commands: newCommands
    }
    
}