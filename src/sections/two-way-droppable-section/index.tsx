import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { Section } from '~/components';

export function TwoWayDroppableSection() {
  const [dropped1, setDropped1] = useState<{ id: string }[]>([]);
  const [dropped2, setDropped2] = useState<{ id: string }[]>([
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
      setDropped1((items) => [...items, { id: active.data.current?.id }]);
      setDropped2((items) =>
        items.filter((item) => item.id !== active.data.current?.id),
      );
    }
  }

  return (
    <Section heading="Two Way Droppable">
      <DndContext onDragEnd={handleDragEnd}>
        <div className={styles.container}>
          <div>
            {dropped1.map((item) => (
              <div key={item.id}>{item.id}</div>
            ))}
          </div>
          <div>
            {dropped2.map((item) => (
              <div key={item.id}>{item.id}</div>
            ))}
          </div>
        </div>
      </DndContext>
    </Section>
  );
}

const styles = {
  container: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1)',
    gap: 4,
  }),
};
