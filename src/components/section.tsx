import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

export function Section({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <div>{children}</div>
    </section>
  );
}

const styles = {
  container: flex({
    direction: 'column',
    gap: 6,
  }),
  heading: css({
    textStyle: '3xl',
    fontWeight: '700',
  }),
};
