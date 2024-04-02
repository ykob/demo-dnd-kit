import { mdiDrag } from '@mdi/js';
import Icon from '@mdi/react';
import { ComponentProps } from 'react';
import { css, cva, cx } from 'styled-system/css';

type CardProps = ComponentProps<'div'> & {
  isDragging?: boolean;
};

export function Card({
  children,
  className,
  isDragging = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cx(
        styles.container({
          isDragging,
        }),
        className,
      )}
      {...props}
    >
      <Icon className={styles.icon} path={mdiDrag} size={1} />
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
      pl: 4,
      py: 6,
      rounded: 'md',
      shadow: 'md',
      cursor: 'grab',
      color: 'black',
      textStyle: 'md',
      fontWeight: '500',
      bg: 'white',
    },
    variants: {
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
