import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { useState } from 'react';
import { flex } from 'styled-system/patterns';
import { Section } from '~/components/';
import { SortableCard } from './sortable-card';

export function SortableSection() {
  const [items, setItems] = useState([
    {
      id: '1',
      title: 'Card 1',
      description: 'Description 1',
    },
    {
      id: '2',
      title: 'Card 2',
      description: 'Description 2',
    },
    {
      id: '3',
      title: 'Card 3',
      description: 'Description 3',
    },
  ]);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (!over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Section heading="Sortable">
      <div className={styles.cards}>
        <DndContext onDragEnd={handleDragEnd}>
          <SortableContext items={items}>
            {items.map((item) => (
              <SortableCard
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </Section>
  );
}

const styles = {
  cards: flex({
    direction: 'column',
    gap: 2,
  }),
};
