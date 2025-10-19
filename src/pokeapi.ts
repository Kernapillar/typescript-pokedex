import { Cache } from "./pokecache.js"
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache = new Cache(120000); 
  
  constructor() {};

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL && pageURL.length > 0 ? pageURL: `${PokeAPI.baseURL}/location-area` 
    
    const cached = this.#cache.get<ShallowLocations>(url); 
    if (cached !== undefined) {
        return cached; 
    }
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("invalid page URL");
    }
    const result: ShallowLocations = await response.json(); 
    this.#cache.add(url, result)
    return result;
  };

  async fetchLocation(locationName: string): Promise<locationAreaDetail> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}` 
    const cached = this.#cache.get<locationAreaDetail>(url);
    if (cached !== undefined){
        return cached; 
    };
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("invalid location");
    };
    const result = await response.json(); 
    this.#cache.add(url, result)
    return result;
  };

  async fetchPokemon(pokemonName: string): Promise<pokemonData> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`
    const cached = this.#cache.get<pokemonData>(url); 
    if (cached !== undefined){
        return cached;
    };
    const response = await fetch(url); 
    if (!response.ok) {
        throw new Error("invalid Pokemon Name");
    };
    const result = this.parsePokemonData(await response.json())
    this.#cache.add(url, result); 
    return result;
  };

  parsePokemonData(data: any): pokemonData {
    const pokeData: pokemonData = {
        id: data.id, 
        name: data.name,
        height: data.height,
        weight: data.weight, 
        base_experience: data.base_experience,
        stats: {},
        types: []
    };
    for (const stat of data.stats) {
        pokeData.stats[stat.stat.name] = stat.base_stat
    };

    for (const type of data.types) {
        pokeData.types.push(type.type.name);
    };
    return pokeData;
  };
  
};


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

export type NamedAPIResource = {
    name: string; 
    url: string;
}

export type locationAreaDetail = {
    name: string; 
    pokemon_encounters: {pokemon: NamedAPIResource}[];
}

export type pokemonData = {
    id: number;
    name: string; 
    base_experience: number; 
    height: number;
    weight: number; 
    stats: PokemonStats;
    types: string[];
}

 export type PokemonStats = {
    [name: string]: number;
 }

 