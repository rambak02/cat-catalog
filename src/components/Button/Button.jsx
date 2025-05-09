import styles from "./Button.module.css";

export function Button({ text, onClick, value, page }) {
  return (
    <>
      <button
        className={`${styles.headerButton} ${
          page === value ? styles.active : ""
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
