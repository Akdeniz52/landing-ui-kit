import styles from "./Input.module.scss";

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "email";
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
};

export function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  error,
}: InputProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label} {required && "*"}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={error ? styles.errorInput : ""}
        aria-invalid={!!error}
        aria-describedby={errorId}
        required={required}
      />

      {error && (
        <p id={errorId} className={styles.errorText} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
