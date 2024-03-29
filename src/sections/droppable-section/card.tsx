import { ComponentProps } from "react";
import { css, cx } from 'styled-system/css';

type CardProps = ComponentProps<'div'>;

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cx(styles.container, className)} {...props}>
      {children}
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
