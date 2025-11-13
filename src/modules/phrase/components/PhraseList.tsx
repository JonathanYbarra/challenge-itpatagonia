import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { selectFilteredPhrases, usePhrase } from "../store/phrase.store";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShallow } from "zustand/shallow";

export const PhraseList = () => {
  const removePhrase = usePhrase(useShallow((state) => state.removePhrase));

  const filteredPhrases = usePhrase(useShallow(selectFilteredPhrases));

  return (
    <div className="flex gap-5 flex-wrap">
      {filteredPhrases.length === 0 && <p>No hay frases agregadas</p>}
      {filteredPhrases.map((phrase, i) => (
        <Card className="w-full md:max-w-xs justify-between" key={phrase.id}>
          <CardContent>
            <p className="line-clamp-2">{phrase.text}</p>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" onClick={() => removePhrase(phrase.id)}>
              <Trash2 />
              Eliminar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
