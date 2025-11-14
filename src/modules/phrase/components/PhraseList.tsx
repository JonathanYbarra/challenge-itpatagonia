import { selectFilteredPhrases, usePhrase } from "../store/phrase.store";
import { useShallow } from "zustand/shallow";
import { PhraseItem } from "./PhraseItem";

export const PhraseList = () => {
  const filteredPhrases = usePhrase(useShallow(selectFilteredPhrases));
  const removePhrase = usePhrase(useShallow((state) => state.removePhrase));

  return (
    <div className="flex gap-5 flex-wrap">
      {filteredPhrases.length === 0 && <p>No hay frases agregadas</p>}
      {filteredPhrases.map((phrase) => (
        <PhraseItem key={phrase.id} id={phrase.id} text={phrase.text} onDelete={removePhrase} />
      ))}
    </div>
  );
};
