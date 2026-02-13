import styles from "./Card.module.scss";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  hoverable?: boolean;
};

export function Card({ title, children, hoverable = false }: CardProps) {
  return (
    <div className={`${styles.card} ${hoverable ? styles.hover : ""}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
