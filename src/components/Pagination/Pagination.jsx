import styles from "./Pagination.module.css";

export function Pagination({ setPageNumber, pageNumber }) {
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
