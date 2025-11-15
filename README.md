# Challenge IT Patagonia - Gestor de Frases

Es una aplicación simple construida con React, Vite y TypeScript, como parte del challenge de IT Patagonia. Permite a los usuarios crear, filtrar y eliminar frases, con persistencia de datos en el LocalStorage.


---

## ✨ Features

* **Creación de Frases:** Añade nuevas frases a la colección.
* **Eliminación de Frases:** Borra frases de la colección.
* **Filtro Dinámico:** Busca en tiempo real las frases que coincidan con el texto ingresado.
* **Persistencia:** Las frases se guardan en `localStorage` usando `zustand/persist`.
* **Modo Oscuro:** Soporte para tema Light/Dark.
* **Formulario Validado:** Control de formulario usando `TanStack Form`.

---

## 🛠️ Stack Tecnológico

* **Framework:** React 18
* **Bundler:** Vite
* **Lenguaje:** TypeScript
* **Gestión de Estado:** Zustand
* **Estilos:** TailwindCSS
* **Componentes UI:** shadcn/ui
* **Formularios:** TanStack Form
* **Routing:** TanStack Router
* **Testing Unitario/Integración:** Vitest + React Testing Library
* **Testing E2E:** Playwright

---

## 🚀 Cómo ejecutar el proyecto

Para levantar el proyecto localmente, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/JonathanYbarra/challenge-itpatagonia.git](https://github.com/JonathanYbarra/challenge-itpatagonia.git)
cd challenge-itpatagonia
```


### 2. Instalar dependencias
```bash
npm install
```


### 3. Ejecutar la aplicación
```bash
npm run dev
```


## 🧪 Cómo ejecutar las pruebas
El proyecto cuenta con cobertura de pruebas unitarias, de integración y End-to-End.

Pruebas Unitarias y de Integración (Vitest)
```bash
npm run test
```


## Pruebas End-to-End (Playwright)
Para ejecutar los tests en modo "headless" (sin UI):
```bash
npx playwright test
```


## Para abrir la UI interactiva de Playwright (Recomendado):
Para ejecutar los tests en modo "headless" (sin UI):
```bash
npx playwright test --ui
```
