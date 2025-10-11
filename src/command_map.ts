import { State } from "./state.js";


export async function commandMap(state: State): Promise<void> {
    const mapData = await state.api.fetchLocations(state.nextLocationsURL); 
    state.nextLocationsURL = mapData.next;
    state.prevLocationsURL = mapData.previous;
    for (const location of mapData.results) {
        console.log(location.name);
    };
}
export async function commandMapB(state: State): Promise<void> {
    if (!state.prevLocationsURL || state.nextLocationsURL.includes("offset=20&limit=20")) {
        state.nextLocationsURL = "";
        console.log("you're on the first page");
        return;
    }
    const mapData = await state.api.fetchLocations(state.prevLocationsURL); 
    state.nextLocationsURL = mapData.next;
    state.prevLocationsURL = mapData.previous;
    for (const location of mapData.results) {
        console.log(location.name);
    };
}