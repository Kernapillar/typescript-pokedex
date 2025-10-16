import { type State } from "./state.js";


export async function commandMap(state: State): Promise<void> {
    const mapData = await state.api.fetchLocations(state.nextLocationsURL); 
    state.nextLocationsURL = mapData.next ?? undefined;
    state.prevLocationsURL = mapData.previous ?? undefined;
    for (const location of mapData.results) {
        console.log(location.name);
    };
}
export async function commandMapB(state: State): Promise<void> {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }
    const mapData = await state.api.fetchLocations(state.prevLocationsURL); 
    state.nextLocationsURL = mapData.next ?? undefined;
    state.prevLocationsURL = mapData.previous ?? undefined;
    for (const location of mapData.results) {
        console.log(location.name);
    };
}