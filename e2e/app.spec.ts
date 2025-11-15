import { test, expect } from "@playwright/test";

test("should allow a user to create, filter, and delete a phrase", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("No hay frases agregadas")).toBeVisible();

  const phraseInput = page.getByPlaceholder("Escribe una frase..");
  const createButton = page.getByRole("button", { name: /Crear frase/i });
  const searchInput = page.getByPlaceholder("Buscar frase");

  await phraseInput.fill("Mi primera frase E2E");
  await createButton.click();

  await expect(page.getByText("Mi primera frase E2E")).toBeVisible();
  await expect(phraseInput).toHaveValue("");

  await phraseInput.fill("La segunda frase para filtrar");
  await createButton.click();
  await expect(page.getByText("La segunda frase para filtrar")).toBeVisible();

  await searchInput.fill("E2E");

  await expect(page.getByText("Mi primera frase E2E")).toBeVisible();
  await expect(page.getByText("La segunda frase para filtrar")).toBeHidden();

  await searchInput.clear();

  await page
    .getByRole("button", { name: /Eliminar/i })
    .first()
    .click();

  await expect(page.getByText("Mi primera frase E2E")).toBeVisible();
  await expect(page.getByText("La segunda frase para filtrar")).toBeHidden();
});
