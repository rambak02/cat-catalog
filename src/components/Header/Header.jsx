import { Button } from "../Button/Button";
import styles from "./Header.module.css";

export function Header({ page, setPage }) {
  return (
    <>
      <div className={styles["header"]}>
        <Button
        page = {page}
          text={"Все котики"}
          value = "ALLCATS"
          onClick={() => setPage("ALLCATS")}
        />
        <Button
          page = {page}
          text={"Любимые котики"}
          value = "FAVORITES"
          onClick={() => setPage("FAVORITES")}
        />
      </div>
    </>
  );
}
