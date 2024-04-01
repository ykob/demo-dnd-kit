import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { Section } from '~/components';
import { DraggableCard } from './draggable-card';
import { DraggableCards } from './draggable-cards';
import { DroppableBlock } from './droppable-block';

export function DroppableSection() {
  const [dropped, setDropped] = useState<{ id: string }[]>([]);

  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e;

    if (
      over &&
      over.data.current?.accepts.includes(active.data.current?.type)
    ) {
      setDropped((items) => [...items, { id: active.data.current?.type }]);
    }
  }

  return (
    <Section heading="Droppable">
      <DndContext onDragEnd={handleDragEnd}>
        <div className={styles.container}>
          <DroppableBlock dropped={dropped} />
          <DraggableCards>
            <DraggableCard id="draggable-item-1" type="draggable-item" />
            <DraggableCard id="draggable-item-2" type="draggable-item" />
            <DraggableCard id="draggable-item-3" type="draggable-item" />
          </DraggableCards>
        </div>
      </DndContext>
    </Section>
  );
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  }),
};
