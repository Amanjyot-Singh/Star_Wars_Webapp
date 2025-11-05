import { useState } from "react";
import { Character } from "@/types/starwars";
import { useCharacters } from "@/hooks/useCharacters";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { CharacterGrid } from "@/components/CharacterGrid";
import { CharacterModal } from "@/components/CharacterModal";
import { LoadingGrid } from "@/components/LoadingGrid";
import { ErrorState } from "@/components/ErrorState";
import { Pagination } from "@/components/Pagination";
import { useDebounce } from "@/hooks/useDebounce";

const Index = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const debouncedSearch = useDebounce(searchQuery, 500);
  const { data, isLoading, error, refetch } = useCharacters(page, debouncedSearch);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
    setModalOpen(true);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {isLoading ? (
          <LoadingGrid />
        ) : error ? (
          <ErrorState onRetry={() => refetch()} />
        ) : data?.results.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No characters found</p>
          </div>
        ) : (
          <>
            <CharacterGrid
              characters={data?.results || []}
              onCharacterClick={handleCharacterClick}
            />
            
            <div className="mt-12">
              <Pagination
                currentPage={page}
                hasNext={!!data?.next}
                hasPrevious={!!data?.previous}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        )}
      </main>

      <CharacterModal
        character={selectedCharacter}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;
