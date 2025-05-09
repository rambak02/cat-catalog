import { useState } from "react";
import "./App.css";
import { CatList } from "./components/CatList/CatList";
import { Header } from "./components/Header/Header";
import { Pagination } from "./components/Pagination/Pagination";

function App() {
  const [page, setPage] = useState("ALLCATS");
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <>
      <Header page = {page} setPage={setPage} />
      <CatList
        page={page}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </>
  );
}

export default App;
