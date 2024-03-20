import { mdiOpenInNew } from '@mdi/js';
import Icon from '@mdi/react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

export function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.heading}>Demo dnd-kit</h1>
      <p>
        <a href="https://dndkit.com/" target="_blank" className={styles.link}>
          https://dndkit.com/
          <Icon path={mdiOpenInNew} size={0.8} />
        </a>
      </p>
    </header>
  );
}

const styles = {
  container: flex({
    direction: 'column',
    gap: 4,
    lineHeight: 'tight',
  }),
  heading: css({
    textStyle: '5xl',
    fontWeight: '700',
  }),
  link: flex({
    gap: 1,
    alignItems: 'center',
  }),
};
