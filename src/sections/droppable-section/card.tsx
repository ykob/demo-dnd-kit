import { ComponentProps } from 'react';
import { cva, cx } from 'styled-system/css';

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
      {children}
    </div>
  );
}

const styles = {
  container: cva({
    base: {
      px: 8,
      py: 6,
      rounded: 'md',
      shadow: 'md',
      color: 'black',
      bg: 'white',
    },
    variants: {
      isDragging: {
        true: {
          shadow: 'lg',
        },
      },
    },
  }),
};
