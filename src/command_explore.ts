import { State } from "./state.js";


export async function commandExplore(state: State, location: string): Promise<void> {
    const exploreData = await state.api.fetchLocation(location); 
    console.log(`Exploring ${location}...`);
    console.log("Found Pokemon:");
    for (const encounter of exploreData.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    };
}