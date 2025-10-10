import { type State } from "./state.js"

export function cleanInput(input: string): string[] {
    const words = input.trim().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
    }
    return words;
}

export function startREPL(state: State): void {

    state.rl.prompt();
    state.rl.on("line", (input) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length === 0) {
            state.rl.prompt()
        };
        
        const cmd = state.commands[cleanedInput[0]]; 
        if (cmd) {
            cmd.callback(state); 
        } else {
            console.log("Unknown command")
        }

        state.rl.prompt()
    });

}