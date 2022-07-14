import React from "react";

import ListMovie from "./ListMovie";

import { getPageCount, getPagesArray } from "./../utils/utils";
import Pagination from "./Pagination";
import Loader from "./UI/Loader";

function Movies() {
  const [arrMovies, setArrMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [totalCount, setTotalCount] = React.useState();
  const limit = 10;
  const url = `/api/top-movies?_limit=${limit}&_page=${page}`;
  let pagesArray = getPagesArray(limit);

  React.useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        setTotalCount(() => response.headers.get("x-total-count"));
        return response.json();
      })
      .then((json) => {
        setArrMovies(json.items);
        setTotalPages(getPageCount(totalCount, limit));
        pagesArray = getPagesArray(totalPages);
        setLoading(false);
      })
      .catch((reject) => console.log(reject));
  }, [page]);
  return (
    <>
      {loading === false ? (
        <div className="container">
          <ListMovie list={arrMovies} />
          <Pagination
            pagesArray={pagesArray}
            page={page}
            changePage={setPage}
            totalPages={totalPages}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Movies;
