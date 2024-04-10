import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { Section } from '~/components';
import { DraggableCard } from './draggable-card';
import { DraggableCards } from './draggable-cards';
import { DroppableBlock } from './droppable-block';

export function DroppableSection() {
  const [dropped, setDropped] = useState<{ id: string }[]>([]);
  const [undropped, setUndropped] = useState<{ id: string }[]>([
    { id: 'draggable-item-1' },
    { id: 'draggable-item-2' },
    { id: 'draggable-item-3' },
  ]);

  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e;

    if (
      over &&
      over.data.current?.accepts.includes(active.data.current?.type)
    ) {
      setDropped((items) => [...items, { id: active.data.current?.id }]);
      setUndropped((items) =>
        items.filter((item) => item.id !== active.data.current?.id),
      );
    }
  }

  return (
    <Section heading="Droppable">
      <DndContext onDragEnd={handleDragEnd}>
        <div className={styles.container}>
          <DroppableBlock dropped={dropped} done={undropped.length === 0} />
          <DraggableCards>
            {undropped.map((item) => (
              <DraggableCard key={item.id} id={item.id} type="draggable-item" />
            ))}
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
