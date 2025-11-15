import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { usePhrase } from "../store/phrase.store";
import { PhraseList } from "./PhraseList";
import userEvent from "@testing-library/user-event";

describe("<PhraseList />", () => {
  const mockPhrases = [
    { id: "1", text: "Frase de prueba 1 (React)" },
    { id: "2", text: "Frase de prueba 2 (Vite)" },
  ];

  beforeEach(() => {
    usePhrase.setState({
      phrases: [],
      searchQuery: "",
    });
  });

  it("should render the empty state message when no phrases exist", () => {
    usePhrase.setState({ phrases: [] });
    render(<PhraseList />);

    expect(screen.getByText(/No hay frases agregadas/i)).toBeInTheDocument();
  });

  it("should render the list of phrases when phrases exist", () => {
    usePhrase.setState({ phrases: mockPhrases });

    render(<PhraseList />);

    expect(screen.getByText("Frase de prueba 1 (React)")).toBeInTheDocument();
    expect(screen.getByText("Frase de prueba 2 (Vite)")).toBeInTheDocument();

    expect(screen.queryByText(/No hay frases agregadas/i)).not.toBeInTheDocument();
  });

  it("should filter the list correctly based on the store's searchQuery", () => {
    usePhrase.setState({
      phrases: mockPhrases,
      searchQuery: "React",
    });

    render(<PhraseList />);

    expect(screen.getByText("Frase de prueba 1 (React)")).toBeInTheDocument();
    expect(screen.queryByText("Frase de prueba 2 (Vite)")).not.toBeInTheDocument();
  });

  it("should remove a phrase when its delete button is clicked", async () => {
    const user = userEvent.setup();
    usePhrase.setState({ phrases: mockPhrases });
    render(<PhraseList />);

    expect(screen.getByText("Frase de prueba 1 (React)")).toBeInTheDocument();
    expect(screen.getByText("Frase de prueba 2 (Vite)")).toBeInTheDocument();

    const deleteButtons = screen.getAllByRole("button", { name: /eliminar/i });
    await user.click(deleteButtons[0]);

    expect(screen.queryByText("Frase de prueba 1 (React)")).not.toBeInTheDocument();
    expect(screen.getByText("Frase de prueba 2 (Vite)")).toBeInTheDocument();

    const state = usePhrase.getState();
    expect(state.phrases).toHaveLength(1);
    expect(state.phrases[0].id).toBe("2");
  });
});
