import { useDroppable } from '@dnd-kit/core';
import { css, cva } from 'styled-system/css';
import { Card } from './card';
import { DraggableCards } from './draggable-cards';

type DroppableProps = {
  dropped: { id: string }[];
  done: boolean;
};

export function DroppableBlock({ dropped, done = false }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
    data: {
      accepts: ['draggable-item'],
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Droppable</div>
      <div
        className={styles.droppableContainer({
          isOver,
          hasItems: dropped.length > 0,
        })}
        ref={setNodeRef}
      >
        {dropped.length === 0 ? (
          <div className={styles.dropHere}>Drop here</div>
        ) : (
          <>
            <DraggableCards className={styles.cards}>
              {dropped.map((item, index) => {
                return <Card key={index}>{item.id}</Card>;
              })}
            </DraggableCards>
            {!done && <div className={styles.dropHere}>Drop here</div>}
          </>
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
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
  cards: css({
    width: '100%',
  }),
  dropHere: css({
    color: 'lime.600',
    textStyle: 'xl',
  }),
};
