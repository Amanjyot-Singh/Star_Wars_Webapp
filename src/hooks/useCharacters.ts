import { useQuery } from "@tanstack/react-query";
import { fetchCharacters, searchCharacters } from "@/services/swapi";

export const useCharacters = (page: number, searchQuery?: string) => {
  return useQuery({
    queryKey: ["characters", page, searchQuery],
    queryFn: () => searchQuery ? searchCharacters(searchQuery) : fetchCharacters(page),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
