import React from "react";
import Movie from "./Movie";
import cl from "./ListMovie.module.css";
import { Link } from "react-router-dom";

function ListMovieForSearch(props) {
  const list = props.list;
  if (props.list.length === 0) {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "red", fontSize: "2.2rem" }}>
          Nothing found
        </h1>
        <Link to="/" className="notfound">
          to Main page
        </Link>
      </div>
    );
  }
  const listItem = list.map((el) => (
    <li key={el.imdbid}>
      <Movie
        image={el.poster}
        id={el.imdbid}
        imDbRating=""
        title={el.title}
        description={el.crew}
      />
    </li>
  ));
  return (
    <>
      <ul className={cl.ul}>{listItem}</ul>
    </>
  );
}

export default ListMovieForSearch;
