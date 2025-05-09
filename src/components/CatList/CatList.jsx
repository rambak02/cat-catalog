import { useEffect } from "react";
import { getCats } from "../../api/cat";
import { useState } from "react";
import { CatItem } from "../CatItem/CatItem";
import styles from "./CatList.module.css";
import { Loader } from "../Loader/Loader";
import { Pagination } from "../Pagination/Pagination";

export function CatList({ page, pageNumber }) {
  console.log("render");
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteCats, setFavoriteCats] = useState([]);


  const handleAddFavorite = (cat) => {
    if (favoriteCats.some((favCat) => favCat.id === cat.id)) {
      const newFavCats = favoriteCats.filter((favCat) => favCat.id !== cat.id);
      setFavoriteCats([...newFavCats]);
    } else {
      setFavoriteCats([...favoriteCats, cat]);
    }
  };

  const checkAllImagesLoaded = (imageObjects) => {
    return Promise.all(
      imageObjects.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.url;
          img.onload = () => resolve();
        });
      })
    );
  };

  useEffect(() => {
    if (page === "ALLCATS") {
      setCats([]);
      setLoading(true);
      const fetchCats = async () => {
        try {
          const data = await getCats(pageNumber);
          await checkAllImagesLoaded(data);
          setCats(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchCats();
    } else {
      setCats(favoriteCats);
    }
  }, [page, pageNumber]);

  if (loading) return <Loader />;
  return (
    <div className= {styles.container}>
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
