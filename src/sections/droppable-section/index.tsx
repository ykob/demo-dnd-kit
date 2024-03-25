import {
  DndContext,
  DragEndEvent,
} from '@dnd-kit/core';
import { useState } from 'react';
import { Section } from '~/components';
import { DraggableCard } from './draggable-card';
import { DroppableBlock } from './droppable-block';

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
        <DroppableBlock dropped={dropped} />
        <DraggableCard />
      </DndContext>
    </Section>
  );
}
