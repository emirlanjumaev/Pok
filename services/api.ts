import { PokemonList } from "..";

const baseUrl = "https://pokemon-hub.p.rapidapi.com";
const apiKey = process.env.NEXT_PUBLIC_RAPID_KEY!;

const options = {
  headers: new Headers({
    "x-rapidapi-key": apiKey,
  }),
};

export const getAllPokemons = async (q: string) => {
  try {
    const url = q ? `/search?name=${q}` : "/?type=normal";
    const res = await fetch(baseUrl + url, options);
    const items = await res.json();
    return items;
  } catch (error) {
    console.log(error);
    throw new Error("While getting the pokemons something went wrong");
  }
};

export const getPokemonById = async (id: number): Promise<PokemonList> => {
  try {
    const res = await fetch(baseUrl + "/" + id, options);
    const items = await res.json();
    return items.data[0];
  } catch (error) {
    throw new Error("While getting the pokemon by id something went wrong");
  }
};
