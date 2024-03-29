import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useMemo, useState } from 'react';
import { flex } from 'styled-system/patterns';
import { Card, Section } from '~/components/';
import { SortableCard } from './sortable-card';

export function SortableSection() {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
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
  const itemIds = useMemo(() => items.map((item) => item.id), [items]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const activatedItem = items.find((item) => String(item.id) === activeId);

  const handleDragStart = (e: DragStartEvent) => {
    const { active } = e;

    setActiveId(active.id);
  };
  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (!over) return;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(
          (item) => String(item.id) === active.id,
        );
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  };

  return (
    <Section heading="Sortable">
      <div className={styles.cards}>
        <DndContext
          collisionDetection={closestCenter}
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={itemIds}
            strategy={verticalListSortingStrategy}
          >
            {items.map((item, index) => (
              <SortableCard
                key={item.id}
                id={item.id}
                index={index}
                title={item.title}
                description={item.description}
                hidden={activeId === item.id}
              />
            ))}
          </SortableContext>
          <DragOverlay>
            {activatedItem ? (
              <Card
                title={activatedItem.title}
                description={activatedItem.description}
                activated
              />
            ) : null}
          </DragOverlay>
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
