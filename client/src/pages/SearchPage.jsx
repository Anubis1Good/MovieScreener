import React from "react";
import Loader from "../component/UI/Loader";

import ListMovieForSearch from "./../component/ListMovieForSearch";

function SearchPage() {
  const url = window.localStorage.getItem("url");
  const [newSearchReq, setNewSearchReq] = React.useState(false);
  const [arrMovies, setArrMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    window.localStorage.removeItem("url");
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setArrMovies(json.results);
        setLoading(false);
      })
      .catch((reject) => {
        setLoading(false);
        console.log(reject);
      });
  }, [newSearchReq]);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>Search result:</h1>
      {loading === false ? <ListMovieForSearch list={arrMovies} /> : <Loader />}
    </div>
  );
}

export default SearchPage;
