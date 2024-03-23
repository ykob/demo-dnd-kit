import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Section } from '~/components';

const Draggable = () => {
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

const Droppable = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
    data: {
      accepts: ['type1', 'type2'],
    },
  });

  return <div ref={setNodeRef}>Droppable</div>;
};

export function DroppableSection() {
  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e;
    console.log(active, over);

    if (
      over &&
      over.data.current?.accepts.includes(active.data.current?.type)
    ) {
      console.log('Dropped draggable into droppable');
    }
  }

  return (
    <Section heading="Droppable">
      <DndContext onDragEnd={handleDragEnd}>
        <Droppable />
        <Draggable />
      </DndContext>
    </Section>
  );
}
