import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { css } from 'styled-system/css';

export function DraggableCard() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
    data: { type: 'type1' },
  });
  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={styles.container}
      {...attributes}
      {...listeners}
    >
      Draggable
    </div>
  );
}

const styles = {
  container: css({
    px: 8,
    py: 6,
    rounded: 'md',
    bg: 'white',
  }),
};
