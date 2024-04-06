import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';

type DraggableCardsProps = ComponentProps<'div'>;

export function DraggableCards({
  children,
  className,
  ...props
}: DraggableCardsProps) {
  return (
    <div className={cx(styles.container, className)} {...props}>
      {children}
    </div>
  );
}

const styles = {
  container: css({
    display: 'grid',
    gap: 4,
    gridTemplateColumns: 'repeat(1, 1fr)',
  }),
};
