import { createInterface } from "node:readline";
import { getCommands } from "./command.js";

export function cleanInput(input: string): string[] {
    const words = input.trim().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
    }
    return words;
}

export function startREPL(): void {
    const pokeInterface = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    const commands = getCommands();
    pokeInterface.prompt();
    pokeInterface.on("line", (input) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length === 0) {
            pokeInterface.prompt()
        };
        
        const cmd = commands[cleanedInput[0]]; 
        if (cmd) {
            cmd.callback(commands); 
        } else {
            console.log("Unknown command")
        }

        pokeInterface.prompt()
    });

}