import { createInterface } from "node:readline";

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
    pokeInterface.prompt();
    pokeInterface.on("line", (input) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length === 0) {
            pokeInterface.prompt()
        };
        console.log(`Your command was: ${cleanedInput[0]}`);
        pokeInterface.prompt()
    });

}