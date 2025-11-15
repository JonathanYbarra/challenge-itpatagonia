import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { usePhrase } from "../store/phrase.store";
import userEvent from "@testing-library/user-event";
import { SearchContainer } from "./SearchContainer";

describe("<SearchContainer />", () => {
  beforeEach(() => {
    usePhrase.setState({
      phrases: [],
      searchQuery: "",
    });
  });

  it("should render the empty state message when no phrases exist", () => {
    usePhrase.setState({ searchQuery: "Texto de prueba" });
    render(<SearchContainer />);
    const searchInput = screen.getByPlaceholderText(/Buscar frase/i);
    expect(searchInput).toHaveValue("Texto de prueba");
  });

  it("should render the list of phrases when phrases exist", async () => {
    const user = userEvent.setup();
    render(<SearchContainer />);
    const searchInput = screen.getByPlaceholderText(/Buscar frase/i);

    await user.type(searchInput, "Hola");

    expect(usePhrase.getState().searchQuery).toBe("Hola");

    await user.type(searchInput, " Mundo");

    expect(usePhrase.getState().searchQuery).toBe("Hola Mundo");
  });
});
