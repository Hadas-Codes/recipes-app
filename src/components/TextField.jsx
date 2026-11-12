import { useId } from "react";

export default function TextField({ label, error, ...props }) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-describedby={error ? `${id}-error` : undefined} {...props} />
      {error && (
        <p id={`${id}-error`} style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}