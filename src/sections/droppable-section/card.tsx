import { mdiDrag } from '@mdi/js';
import Icon from '@mdi/react';
import { ComponentProps } from 'react';
import { css, cva, cx } from 'styled-system/css';

type CardProps = ComponentProps<'div'> & {
  draggable?: boolean;
  isDragging?: boolean;
};

export function Card({
  children,
  className,
  draggable = false,
  isDragging = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cx(
        styles.container({
          draggable,
          isDragging,
        }),
        className,
      )}
      {...props}
    >
      {draggable && <Icon className={styles.icon} path={mdiDrag} size={1} />}
      <div>{children}</div>
    </div>
  );
}

const styles = {
  container: cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      pr: 8,
      py: 6,
      rounded: 'md',
      shadow: 'md',
      color: 'black',
      textStyle: 'md',
      fontWeight: '500',
      bg: 'white',
    },
    variants: {
      draggable: {
        true: {
          cursor: 'grab',
          pl: 4,
        },
        false: {
          pl: 8,
        },
      },
      isDragging: {
        true: {
          cursor: 'grabbing',
          shadow: 'lg',
        },
      },
    },
  }),
  icon: css({
    flexShrink: 0,
  }),
};
