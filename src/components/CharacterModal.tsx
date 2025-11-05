import { Character } from "@/types/starwars";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCharacterDetails } from "@/hooks/useCharacterDetails";
import { formatDate, formatHeight, formatMass, formatPopulation } from "@/lib/formatters";
import { Skeleton } from "@/components/ui/skeleton";
import { Film, Globe, User, Calendar, Weight, Ruler } from "lucide-react";

interface CharacterModalProps {
  character: Character | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CharacterModal = ({ character, open, onOpenChange }: CharacterModalProps) => {
  const { data: details, isLoading } = useCharacterDetails(character);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">
            {character?.name}
          </DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        ) : details ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Ruler className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Height</p>
                  <p className="font-semibold">{formatHeight(details.height)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Weight className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Mass</p>
                  <p className="font-semibold">{formatMass(details.mass)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Date Added</p>
                  <p className="font-semibold">{formatDate(details.created)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <User className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Birth Year</p>
                  <p className="font-semibold">{details.birth_year}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Film className="text-accent" size={20} />
                <h3 className="font-semibold text-lg">Films</h3>
              </div>
              <p className="text-muted-foreground">
                Appears in <span className="text-primary font-bold">{details.films.length}</span> film(s)
              </p>
            </div>

            {details.homeworldDetails && (
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="text-accent" size={20} />
                  <h3 className="font-semibold text-lg">Homeworld</h3>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                  <p className="text-lg font-bold text-primary">
                    {details.homeworldDetails.name}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Terrain</p>
                      <p className="font-medium">{details.homeworldDetails.terrain}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Climate</p>
                      <p className="font-medium">{details.homeworldDetails.climate}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-muted-foreground">Population</p>
                      <p className="font-medium">{formatPopulation(details.homeworldDetails.population)}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};
