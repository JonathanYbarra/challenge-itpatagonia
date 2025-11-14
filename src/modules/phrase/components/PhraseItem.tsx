import { memo } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type PhraseItemProps = {
  id: string;
  text: string;
  onDelete: (id: string) => void;
};

export const PhraseItem = memo((props: PhraseItemProps) => {
  const { id, text, onDelete } = props;

  return (
    <Card className="w-full md:max-w-xs justify-between h-full flex flex-col">
      <CardContent>
        <p className="line-clamp-2">{text}</p>
      </CardContent>
      <CardFooter>
        <Button variant="destructive" onClick={() => onDelete(id)} className="w-full">
          <Trash2 className="mr-2 h-4 w-4" />
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
});
