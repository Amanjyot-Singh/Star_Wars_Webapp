import { Character } from "@/types/starwars";
import { Card, CardContent } from "@/components/ui/card";
import { getCharacterId } from "@/services/swapi";
import { getSpeciesColor } from "@/lib/speciesColors";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecies } from "@/services/swapi";

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

export const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  const characterId = getCharacterId(character.url);
  const imageUrl = `https://picsum.photos/seed/${characterId}/400/500`;

  const { data: speciesData } = useQuery({
    queryKey: ["species", character.species[0]],
    queryFn: () => character.species[0] ? fetchSpecies(character.species[0]) : null,
    enabled: !!character.species[0],
  });

  const speciesColor = getSpeciesColor(speciesData?.name);

  return (
    <Card
      onClick={onClick}
      className="card-glow cursor-pointer overflow-hidden border-2 transition-all duration-300"
      style={{ borderColor: speciesColor }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={character.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2" style={{ color: speciesColor }}>
          {character.name}
        </h3>
        {speciesData && (
          <p className="text-sm text-muted-foreground">
            {speciesData.name}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
