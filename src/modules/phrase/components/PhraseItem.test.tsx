import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PhraseItem } from "./PhraseItem";

describe("<PhraseItem />", () => {
  const defaultProps = {
    id: "123",
    text: "Frase de prueba",
    onDelete: vi.fn(),
  };

  it("Should render correctly card", () => {
    render(<PhraseItem {...defaultProps} />);

    const textElement = screen.getByText(defaultProps.text);
    expect(textElement).toBeInTheDocument();
  });

  it("Should call onDelete function", async () => {
    const user = userEvent.setup();
    const onDeleteMock = vi.fn();

    render(<PhraseItem {...defaultProps} onDelete={onDeleteMock} />);

    const deleteButton = screen.getByRole("button", { name: /eliminar/i });

    await user.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
    expect(onDeleteMock).toHaveBeenCalledWith(defaultProps.id);
  });
});
