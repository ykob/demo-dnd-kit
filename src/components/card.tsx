import { ComponentProps, forwardRef } from 'react';
import { css, cx } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type CardProps = ComponentProps<'div'> & {
  title: string;
  description: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function ({
  className,
  title,
  description,
  ...props
}: CardProps, ref) {
  return (
    <div className={cx(styles.container, className)} {...props} ref={ref}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
});

const styles = {
  container: flex({
    direction: 'column',
    gap: 2,
    boxShadow: 'md',
    px: 8,
    pt: 6,
    pb: 8,
    rounded: 'md',
    bg: 'white',
  }),
  title: css({
    lineHeight: 'tight',
    textStyle: 'xl',
    fontWeight: '700',
  }),
  description: css({}),
};
