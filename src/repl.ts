import { type State } from "./state.js"
import { PokeAPI } from "./pokeapi.js";

export function cleanInput(input: string): string[] {
    const words = input.trim().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
    }
    return words;
}

export async function startREPL(state: State): Promise<void> {

    state.rl.prompt();
    state.rl.on("line", async (input) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length === 0) {
            state.rl.prompt()
        };
        
        const cmd = state.commands[cleanedInput[0]]; 
        if (cmd) {
            try {
                await cmd.callback(state); 
            } catch (err) {
                console.error("Error:", (err as Error).message)
            }
        } else {
            console.log("Unknown command")
        }

        state.rl.prompt()
    });

}