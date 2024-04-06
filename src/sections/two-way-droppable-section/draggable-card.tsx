import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Card } from './card';

type DraggableCardProps = { id: string; type: string };

export function DraggableCard({ id, type }: DraggableCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data: { id, type },
    });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card isDragging={isDragging} draggable>
        {id}
      </Card>
    </div>
  );
}
