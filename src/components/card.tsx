import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { mdiDragHorizontalVariant } from '@mdi/js';
import { Icon } from '@mdi/react';
import { ComponentProps, forwardRef } from 'react';
import { css, cva, cx } from 'styled-system/css';

type CardProps = Omit<ComponentProps<'div'>, 'children'> & {
  title: string;
  description?: string;
  activated?: boolean;
  hidden?: boolean;
  sortListeners?: SyntheticListenerMap;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function (
  {
    className,
    title,
    description,
    activated,
    hidden,
    sortListeners,
    ...props
  }: CardProps,
  ref,
) {
  return (
    <div
      className={cx(styles.container({ activated, hidden }), className)}
      {...props}
      ref={ref}
    >
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <button className={styles.sortButton} {...sortListeners}>
        <Icon path={mdiDragHorizontalVariant} size={1} />
      </button>
    </div>
  );
});

const styles = {
  container: cva({
    base: {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      gap: 4,
      boxShadow: 'md',
      pt: 6,
      pb: 8,
      pr: 8,
      pl: 4,
      rounded: 'md',
      bg: 'white',
    },
    variants: {
      activated: {
        true: {
          boxShadow: 'xl',
        },
      },
      hidden: {
        true: {
          opacity: 0,
        },
      },
    },
  }),
  content: css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  }),
  title: css({
    lineHeight: 'tight',
    textStyle: 'xl',
    fontWeight: '700',
  }),
  description: css({}),
  sortButton: css({
    width: 10,
    height: 10,
    cursor: 'grab',
    p: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
};
