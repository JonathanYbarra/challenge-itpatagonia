import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePhrase } from "../store/phrase.store";
import { useShallow } from "zustand/shallow";

export const SearchContainer = () => {
    const setSearchQuery = usePhrase(state => state.setSearchQuery)
    const searchQuery = usePhrase(
        useShallow(state => state.searchQuery)
    );

    return (
        <div className="relative w-full max-w-lg">
            <Input
                value={searchQuery}
                placeholder="Buscar frase"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            />
        </div>
    )
}