import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { Section } from '~/components';
import { DroppableBlock } from './droppable-block';

export function TwoWayDroppableSection() {
  const [dropped1, setDropped1] = useState<{ id: string }[]>([
    { id: 'draggable-item-1' },
    { id: 'draggable-item-2' },
    { id: 'draggable-item-3' },
  ]);
  const [dropped2, setDropped2] = useState<{ id: string }[]>([]);

  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e;

    if (
      over &&
      over.data.current?.accepts.includes(active.data.current?.type)
    ) {
      if (over.id === 'droppable-1') {
        setDropped1((items) => [...items, { id: active.data.current?.id }]);
        setDropped2((items) =>
          items.filter((item) => item.id !== active.data.current?.id),
        );
      }
      if (over.id === 'droppable-2') {
        setDropped2((items) => [...items, { id: active.data.current?.id }]);
        setDropped1((items) =>
          items.filter((item) => item.id !== active.data.current?.id),
        );
      }
    }
  }

  return (
    <Section heading="Two Way Droppable">
      <DndContext onDragEnd={handleDragEnd}>
        <div className={styles.container}>
          <DroppableBlock
            id="droppable-1"
            accepts={['droppable-2']}
            dropped={dropped1}
          />
          <DroppableBlock
            id="droppable-2"
            accepts={['droppable-1']}
            dropped={dropped2}
          />
        </div>
      </DndContext>
    </Section>
  );
}

const styles = {
  container: css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 4,
  }),
};
