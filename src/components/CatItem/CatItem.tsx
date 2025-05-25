import { TCat } from "../../types/model";
import styles from "./CatItem.module.css";


type TCatItemProps = {
cat: TCat
onFavoriteClick: () => void,
isFavorite: boolean

}

export function CatItem({ cat, onFavoriteClick, isFavorite }: TCatItemProps) {
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
        />
      </div>
    </>
  );
}
