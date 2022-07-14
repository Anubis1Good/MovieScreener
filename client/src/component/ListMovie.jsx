import React from "react";
import Movie from "./Movie";
import cl from "./ListMovie.module.css";

function ListMovie(props) {
  const list = props.list;
  const listItem = list.map((el) => (
    <li key={el.id}>
      <Movie
        image={el.image}
        id={el.id}
        imDbRating={el.imDbRating}
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

export default ListMovie;
