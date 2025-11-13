
import { ModeToggle } from "@/components/common/ModeToggle";
import { CreatePhrase } from "../components/CreatePhrase";
import { PhraseList } from "../components/PhraseList";
import { SearchContainer } from "../components/SearchContainer";

export const PhrasePage = () => {

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

                <CreatePhrase />

                <SearchContainer />

                <PhraseList />
            </div>
        </div>
    )
}