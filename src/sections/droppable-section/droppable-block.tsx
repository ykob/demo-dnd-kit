import { useDroppable } from '@dnd-kit/core';
import { css, cva } from 'styled-system/css';
import { Card } from './card';
import { DraggableCards } from './draggable-cards';

type DroppableProps = {
  dropped: { id: string }[];
};

export function DroppableBlock({ dropped }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
    data: {
      accepts: ['draggable-item'],
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Droppable</div>
      <div ref={setNodeRef} className={styles.items}>
        {dropped.length === 0 ? (
          <div
            className={styles.droppableContainer({
              isOver,
              hasItems: false,
            })}
          >
            <div className={styles.dropHere}>Drop here</div>
          </div>
        ) : (
          <div
            className={styles.droppableContainer({
              isOver,
              hasItems: true,
            })}
          >
            <DraggableCards className={styles.items}>
              {dropped.map((item, index) => {
                return <Card key={index}>{item.id}</Card>;
              })}
            </DraggableCards>
            <div className={styles.dropHere}>Drop here</div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: css({
    bg: 'white',
    p: 8,
    rounded: 'md',
  }),
  heading: css({
    mb: 4,
    textStyle: 'xl',
  }),
  droppableContainer: cva({
    base: {
      p: 4,
      rounded: 'lg',
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: 'lime.600',
      transition: 'background-color 0.2s',
    },
    compoundVariants: [
      {
        isOver: true,
        css: {
          bg: 'lime.300',
        },
      },
      {
        isOver: false,
        hasItems: false,
        css: {
          bg: 'transparent',
        },
      },
      {
        isOver: false,
        hasItems: true,
        css: {
          bg: 'lime.200',
        },
      },
    ],
  }),
  dropHere: css({
    color: 'lime.600',
    textStyle: 'xl',
    textAlign: 'center',
  }),
  items: css({
    mb: 4,
  }),
};
