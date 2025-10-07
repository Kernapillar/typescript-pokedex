export function cleanInput(input: string): string[] {
    const words = input.trim().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
    }
    return words;
}
