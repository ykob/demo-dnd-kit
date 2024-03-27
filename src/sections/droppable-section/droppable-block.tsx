import { useDroppable } from '@dnd-kit/core';
import { css, cva } from 'styled-system/css';

type DroppableProps = {
  dropped: { id: string }[];
};

export function DroppableBlock({ dropped }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
    data: {
      accepts: ['type1', 'type2'],
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Droppable</div>
      <div ref={setNodeRef} className={styles.items}>
        {dropped.length === 0 ? (
          <div
            className={styles.dropHere({
              isOver,
            })}
          >
            Drop here
          </div>
        ) : (
          dropped.map((item, index) => {
            return <div key={index}>{item.id}</div>;
          })
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
  dropHere: cva({
    base: {
      p: 8,
      rounded: 'lg',
      color: 'lime.500',
      textStyle: 'xl',
      textAlign: 'center',
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: 'lime.500',
      transition: 'background-color 0.2s',
    },
    variants: {
      isOver: {
        true: {
          bg: 'lime.100',
        },
        false: {
          bg: 'transparent',
        },
      },
    },
  }),
  items: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  }),
};
