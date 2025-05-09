import styles from "./CatItem.module.css";

export function CatItem({ cat, onFavoriteClick, isFavorite }) {
  return (
    <>
      <div className={styles["imageContainer"]}>
        <img
          src={cat.url}
          alt="фотография кота"
          className={styles["catImage"]}
        />
        <img
          src={isFavorite ? "/public/favheart.svg" : "/public/heart.svg"}
          alt="лайк"
          className={styles["favoriteIcon"]}
          onClick={onFavoriteClick}
          value={cat.url}
        />
      </div>
    </>
  );
}
