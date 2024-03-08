import { ComponentProps } from "react";
import { css, cx } from "styled-system/css";

type CardProps = ComponentProps<"div"> & {
  title: string;
  description: string;
};

export function Card({ className, title, description, ...props }: CardProps) {
  return (
    <div className={cx(styles.container, className)} {...props}>
      <div className={styles.title}>{ title }</div>
      <div className={styles.description}>{ description }</div>
    </div>
  )
}

const styles = {
  container: css({}),
  title: css({}),
  description: css({}),
}