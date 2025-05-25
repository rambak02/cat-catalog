import { TPageInfo } from "../../types/model";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";

type THeaderProps = Omit<TPageInfo, "pageNumber" | "setPageNumber">

export function Header({ page, setPage }: THeaderProps) {
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
