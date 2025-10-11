export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL && pageURL.length > 0 ? pageURL: `${PokeAPI.baseURL}/location-area` 
    // console.log(pageURL)
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("invalid page URL");
    }
    // console.log(response)
    return response.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}` 
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("invalid location");
    }
    return response.json();
  }
}

export type ShallowLocations = {
  count: string; 
  next: string;
  previous: string;
  results: Location[];
};

export type Location = {
  name: string;
  url: string;
};