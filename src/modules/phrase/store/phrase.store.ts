import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type PhraseState = {
  id: string;
  text: string;
};

type PhrasesState = {
  phrases: PhraseState[];
  searchQuery: string;
};

type PhraseActions = {
  addPhrase: (phrase: PhraseState) => void;
  removePhrase: (id: string) => void;
  setSearchQuery: (query: string) => void;
};

type PhrasesStore = PhrasesState & PhraseActions;

export const usePhrase = create<PhrasesStore>()(
  devtools(
    persist(
      (set) => ({
        phrases: [],
        searchQuery: "",
        addPhrase: (phrase: PhraseState) => {
          set((state) => ({
            phrases: [phrase, ...state.phrases],
          }));
        },
        removePhrase: (id: string) => {
          set((state) => ({
            phrases: state.phrases.filter((phrase) => phrase.id !== id),
          }));
        },
        setSearchQuery: (query: string) => {
          set({ searchQuery: query });
        },
      }),
      {
        name: "phrase-storage"
      }
    )
  )
);

export const selectFilteredPhrases = (state: PhrasesStore) => {
  const query = state.searchQuery.toLowerCase();

  if (!query) return state.phrases;

  return state.phrases.filter((phrase) => phrase.text.toLowerCase().includes(query));
};
