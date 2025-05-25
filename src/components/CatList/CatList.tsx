import { useCallback, useEffect } from "react";
import { getCats } from "../../api/cat";
import { useState } from "react";
import { CatItem } from "../CatItem/CatItem";
import styles from "./CatList.module.css";
import { Loader } from "../Loader/Loader";
import { TCat, TPageInfo } from "../../types/model";

type TCatListProps = Omit<TPageInfo, "setPage" | "setPageNumber">;

export function CatList({ page, pageNumber }: TCatListProps) {
  const [cats, setCats] = useState<TCat[]>([]);
  const [loading, setLoading] = useState(true);
  const [favoriteCats, setFavoriteCats] = useState<TCat[]>([]);

  const handleAddFavorite = (cat: TCat) => {
    if (favoriteCats.some((favCat: TCat) => favCat.id === cat.id)) {
      const newFavCats = favoriteCats.filter(
        (favCat: TCat) => favCat.id !== cat.id
      );
      setFavoriteCats([...newFavCats]);
    } else {
      setFavoriteCats([...favoriteCats, cat]);
    }
  };

  const checkAllImagesLoaded = (imageObjects: TCat[]): Promise<void[]> => {
    return Promise.all(
      imageObjects.map((image) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = image.url;
          img.onload = () => resolve();
        });
      })
    );
  };

  function memo<T extends (...args: any[]) => any>(fn: T): T {
    const cache: Record<string, ReturnType<T>> = {};
    return ((...args: Parameters<T>) => {
      let key = JSON.stringify(args);
      if (key in cache) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      console.log(cache);
      setTimeout(() => {
        delete cache[key];
      }, 180000);
      return result;
    }) as T;
  }

  const fetchCats = useCallback(
    memo(async (pageNum) => {
      const data = await getCats(pageNum);
      return data;
    }),
    []
  );

  useEffect(() => {
    if (page === "ALLCATS") {
      setCats([]);
      setLoading(true);
      const loadCats = async () => {
        try {
          const data = await fetchCats(pageNumber);
          await checkAllImagesLoaded(data);
          setCats(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      loadCats();
    } else {
      setCats(favoriteCats);
    }
  }, [page, pageNumber]);

  if (loading) return <Loader />;
  return (
    <div className={styles.container}>
      <div className={styles["catList"]}>
        {cats.map((cat) => (
          <CatItem
            key={cat.id}
            cat={cat}
            onFavoriteClick={() => handleAddFavorite(cat)}
            isFavorite={favoriteCats.some((favCat) => favCat.id === cat.id)}
          />
        ))}
      </div>
    </div>
  );
}
