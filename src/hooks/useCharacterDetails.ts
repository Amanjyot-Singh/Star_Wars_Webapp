import { useQuery } from "@tanstack/react-query";
import { Character, CharacterDetails } from "@/types/starwars";
import { fetchHomeworld, fetchSpecies } from "@/services/swapi";

export const useCharacterDetails = (character: Character | null) => {
  return useQuery({
    queryKey: ["character-details", character?.url],
    queryFn: async (): Promise<CharacterDetails> => {
      if (!character) throw new Error("No character provided");

      const homeworldDetails = await fetchHomeworld(character.homeworld);
      
      const speciesDetails = await Promise.all(
        character.species.map(url => fetchSpecies(url))
      );

      return {
        ...character,
        homeworldDetails,
        speciesDetails,
      };
    },
    enabled: !!character,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};
