import { flex } from 'styled-system/patterns';

export function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

const styles = {
  container: flex({
    direction: 'column',
    gap: 8,
    maxWidth: '1024px',
    mx: 'auto',
    px: 8,
    py: 12,
  }),
};
