import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreatePhrase } from "./CreatePhrase";
import { usePhrase } from "../store/phrase.store";

describe("<CreatePhrase />", () => {
  let phraseInput: HTMLElement;
  let submitButton: HTMLElement;
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    render(<CreatePhrase />);
    usePhrase.setState({ phrases: [], searchQuery: "" });

    user = userEvent.setup();

    phraseInput = screen.getByPlaceholderText(/Escribe una frase../i);
    submitButton = screen.getByRole("button", { name: /Crear frase/i });
  });

  it("should display an error if the form is submitted empty", async () => {
    await user.click(submitButton);

    const errorMessage = await screen.findByText(/La frase debe tener al menos 1 caracteres./i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should display an error if the phrase exceeds 65 characters", async () => {
    const longText = "a".repeat(66);

    await user.type(phraseInput, longText);

    const errorMessage = await screen.findByText(/La frase debe ser menor 65 caracteres./i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should create a phrase successfully and clear the input", async () => {
    const newPhrase = "Prueba de frase";

    await user.type(phraseInput, newPhrase);
    await user.click(submitButton);

    expect(phraseInput).toHaveValue("");

    const state = usePhrase.getState();
    expect(state.phrases).toHaveLength(1);
    expect(state.phrases[0].text).toBe(newPhrase);
  });
});
