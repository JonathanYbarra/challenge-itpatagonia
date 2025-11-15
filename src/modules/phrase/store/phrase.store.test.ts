import { describe, expect, it, beforeEach } from "vitest";
import { usePhrase, selectFilteredPhrases } from "./phrase.store";

const mockPhrases = [
  { id: "1", text: "Frase con React" },
  { id: "2", text: "Frase con Angular" },
  { id: "3", text: "frase en lowercase" },
];

describe("Zustand - Phrase Store Logic", () => {
  beforeEach(() => {
    usePhrase.setState({
      phrases: [],
      searchQuery: "",
    });
  });

  it("should add a new phrase", () => {
    usePhrase.getState().addPhrase({ id: "1", text: "Hola" });

    const state = usePhrase.getState();
    expect(state.phrases).toHaveLength(1);
    expect(state.phrases[0].text).toBe("Hola");
  });

  it("should remove a phrase by id", () => {
    usePhrase.setState({ phrases: mockPhrases, searchQuery: "" });
    usePhrase.getState().removePhrase("2");

    const state = usePhrase.getState();
    expect(state.phrases).toHaveLength(2);
    expect(state.phrases.find((p) => p.text === "Frase con Angular")).toBeUndefined();
  });

  describe("selectFilteredPhrases (Selector)", () => {
    it("should return all phrases if query is empty", () => {
      const state = {
        phrases: mockPhrases,
        searchQuery: "",
        addPhrase: () => {},
        removePhrase: () => {},
        setSearchQuery: () => {},
      };
      const result = selectFilteredPhrases(state);
      expect(result).toHaveLength(3);
    });

    it("should return filtered phrases (case insensitive)", () => {
      const state = {
        phrases: mockPhrases,
        searchQuery: "React",
        addPhrase: () => {},
        removePhrase: () => {},
        setSearchQuery: () => {},
      };
      const result = selectFilteredPhrases(state);

      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("1");
    });

    it("should return empty if no match", () => {
      const state = {
        phrases: mockPhrases,
        searchQuery: "Vue",
        addPhrase: () => {},
        removePhrase: () => {},
        setSearchQuery: () => {},
      };
      const result = selectFilteredPhrases(state);
      expect(result).toHaveLength(0);
    });
  });
});
