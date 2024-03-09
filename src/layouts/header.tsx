import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

export function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.heading}>Demo dnd-kit</h1>
      <p>
        <a href="https://dndkit.com/" target="_blank">
          https://dndkit.com/
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
};
