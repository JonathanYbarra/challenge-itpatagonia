import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { usePhrase } from "../store/phrase.store"
import { useForm } from "@tanstack/react-form"
import { useShallow } from "zustand/shallow"

export const CreatePhrase = () => {
    const addPhrase = usePhrase(
        useShallow(
            state => state.addPhrase
        )
    )

    const form = useForm({
        defaultValues: {
            phrase: "",
        },
        onSubmit: async ({ value }) => {
            addPhrase({
                id: crypto.randomUUID(),
                text: value.phrase
            })

            form.reset()
        },
    })

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                }}
                className="flex w-full max-w-lg items-start gap-2"
            >
                <form.Field
                    name="phrase"
                    validators={{
                        onChangeAsyncDebounceMs: 0,
                        onChangeAsync: ({ value }) => {
                            if (value.length < 1) {
                                return "La frase debe tener al menos 1 caracteres."
                            }

                            if (value.length > 65) {
                                return "La frase debe ser menor 65 caracteres."
                            }
                        }
                    }}
                    children={(field) => (
                        <div className="flex flex-col w-full">
                            <Input
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                            {
                                field.state.meta.errors &&
                                <span className="text-destructive text-xs">
                                    {
                                        field.state.meta.errors[0]
                                    }
                                </span>
                            }
                        </div>
                    )}
                />
                <Button
                    type='submit'
                    variant="outline"
                    className="dark:text-foreground"
                    disabled={form.state.isSubmitting}
                >
                    <Plus /> Crear frase
                </Button>
            </form>
        </>
    )
}