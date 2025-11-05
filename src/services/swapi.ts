import { ApiResponse, Character, Homeworld, Species } from "@/types/starwars";

const BASE_URL = "https://swapi.dev/api";

export const fetchCharacters = async (page: number = 1): Promise<ApiResponse<Character>> => {
  const response = await fetch(`${BASE_URL}/people/?page=${page}`);
  if (!response.ok) throw new Error("Failed to fetch characters");
  return response.json();
};

export const searchCharacters = async (query: string): Promise<ApiResponse<Character>> => {
  const response = await fetch(`${BASE_URL}/people/?search=${query}`);
  if (!response.ok) throw new Error("Failed to search characters");
  return response.json();
};

export const fetchHomeworld = async (url: string): Promise<Homeworld> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch homeworld");
  return response.json();
};

export const fetchSpecies = async (url: string): Promise<Species> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch species");
  return response.json();
};

export const getCharacterId = (url: string): string => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : "1";
};
