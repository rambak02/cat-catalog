import { TPageInfo } from "../../types/model";
import styles from "./Pagination.module.css";

type TPaginationProps = Omit<TPageInfo, "page" | "setPage">

export function Pagination({ setPageNumber, pageNumber }: TPaginationProps) {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles["paginationContainer"]}>
      {pages.map((page) => {
        return (
          <div
            className={`${styles["paginationItem"]} ${
              (pageNumber + 1) === page ? styles["active"] : ""
            }`}
            key={page}
            onClick={() => setPageNumber(page - 1)}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
}
