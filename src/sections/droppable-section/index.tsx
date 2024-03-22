import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Section } from '~/components';

const Draggable = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
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

const Droppable = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  return <div ref={setNodeRef}>Droppable</div>;
};

export function DroppableSection() {
  return (
    <Section heading="Droppable">
      <DndContext>
        <Droppable />
        <Draggable />
      </DndContext>
    </Section>
  );
}
