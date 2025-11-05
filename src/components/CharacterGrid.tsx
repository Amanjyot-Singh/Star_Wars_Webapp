import { Character } from "@/types/starwars";
import { CharacterCard } from "./CharacterCard";

interface CharacterGridProps {
  characters: Character[];
  onCharacterClick: (character: Character) => void;
}

export const CharacterGrid = ({ characters, onCharacterClick }: CharacterGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {characters.map((character) => (
        <CharacterCard
          key={character.url}
          character={character}
          onClick={() => onCharacterClick(character)}
        />
      ))}
    </div>
  );
};
