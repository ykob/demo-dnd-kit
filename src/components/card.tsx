import { ComponentProps, forwardRef } from 'react';
import { css, cx, cva } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type CardProps = ComponentProps<'div'> & {
  title: string;
  description: string;
  activated?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function ({
  className,
  title,
  description,
  activated,
  ...props
}: CardProps, ref) {
  return (
    <div className={cx(styles.container({ activated }), className)} {...props} ref={ref}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
});

const styles = {
  container: cva({
    base:{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      boxShadow: 'md',
      px: 8,
      pt: 6,
      pb: 8,
      rounded: 'md',
      bg: 'white',
    },
    variants: {
      activated: {
        true: {
          boxShadow: 'xl',
        }
      },
    },
  }),
  title: css({
    lineHeight: 'tight',
    textStyle: 'xl',
    fontWeight: '700',
  }),
  description: css({}),
};
