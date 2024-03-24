import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
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

type DroppableProps = {
  dropped: { id: string }[];
};

const Droppable = ({ dropped }: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
    data: {
      accepts: ['type1', 'type2'],
    },
  });

  return (
    <div ref={setNodeRef}>
      <div>Droppable</div>
      <div>
        {dropped.map((item, index) => {
          return <div key={index}>{item.id}</div>;
        })}
      </div>
    </div>
  );
};

export function DroppableSection() {
  const [dropped, setDropped] = useState<{ id: string }[]>([]);

  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e;

    if (
      over &&
      over.data.current?.accepts.includes(active.data.current?.type)
    ) {
      console.log('Dropped draggable into droppable');
      setDropped((items) => [...items, { id: active.data.current?.type }]);
    }
  }

  return (
    <Section heading="Droppable">
      <DndContext onDragEnd={handleDragEnd}>
        <Droppable dropped={dropped} />
        <Draggable />
      </DndContext>
    </Section>
  );
}
