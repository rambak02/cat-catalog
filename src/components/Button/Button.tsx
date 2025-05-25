import styles from "./Button.module.css";

type TButtonProps = {
text : string,
onClick: () => void,
value: string,
page: string
}

export function Button({ text, onClick, value, page }: TButtonProps) {
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
