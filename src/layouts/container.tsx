import { css } from 'styled-system/css';

export function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

const styles = {
  container: css({
    maxWidth: '1024px',
    mx: 'auto',
    px: 8,
    py: 12,
  }),
};
