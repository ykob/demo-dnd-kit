import {
  useDraggable,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export function DraggableCard() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
    data: { type: 'type1' },
  });
  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      Draggable
    </div>
  );
};
