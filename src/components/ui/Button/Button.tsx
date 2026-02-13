import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
