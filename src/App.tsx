import { Moon, Plus, Search, Sun, Trash2 } from "lucide-react";
import { Button } from "./components/ui/button"
import { Card, CardContent, CardFooter } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { useTheme } from "./components/theme.provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function App() {
  return (
    <div className="min-h-screen bg-secondary p-6 sm:p-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <header>
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-foreground mb-2">Gestor de Frases</h1>
            <ModeToggle />
          </div>
          <p className="text-lg text-slate-600 dark:text-foreground">Agrega, busca y elimina frases</p>
        </header>

        <div className="flex w-full max-w-lg items-center gap-2">
          <Input placeholder="Escribe una nueva frase.." />
          <Button variant="outline" className="dark:text-foreground">
            <Plus /> Crear frase
          </Button>
        </div>

        <div className="flex w-full max-w-lg gap-2">
          <Input placeholder="Buscar frase" />
          <Button variant="secondary" className="border dark:border-foreground">
            <Search />
          </Button>
        </div>

        <div className="flex gap-5 flex-wrap">
          {
            [0, 1, 2, 3, 4, 5].map(item =>
              <Card className="w-full md:max-w-xs" key={item}>
                <CardContent>
                  <p>"La vida es bella."</p>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive">
                    <Trash2 />
                    Eliminar
                  </Button>
                </CardFooter>
              </Card>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App;

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="dark:border-foreground">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 " />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 dark:text-foreground" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
