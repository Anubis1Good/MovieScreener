import React from "react";
import Description from "./Description";
import cl from "./Movies.module.css";
import MSModal from "./UI/MSModal";

function Movie(props) {
  const [description, setDescription] = React.useState("desc");
  const [modalVisible, setModalVisible] = React.useState(false);
  const url = "/api/description-movie/:";

  const reqDescription = async (id) => {
    const result = await fetch(url + id);
    const data = await result.json();
    setDescription(data);
  };
  const clickMovie = async () => {
    await reqDescription(props.id);
    setModalVisible(true);
  };
  const classOfRating = (rating) => {
    if (rating >= 8) {
      return cl.hight;
    } else if (rating <= 5 && rating > 0) {
      return cl.low;
    } else if (rating === "") {
      return cl.none;
    } else return cl.middle;
  };

  return (
    <div className={cl.movie} onClick={clickMovie}>
      <MSModal visible={modalVisible} setVisible={setModalVisible}>
        <Description
          name={description.name}
          year={description.year}
          country={description.country}
          genres={description.genres}
          runtime={description.runtime}
          languages={description.languages}
          plot={description.plot}
          actors={description.actors}
          director={description.director}
          writer={description.writer}
        />
      </MSModal>
      <img src={props.image} alt="Poster not found" />
      <h1>{props.title}</h1>
      <h2 className={classOfRating(props.imDbRating)}>{props.imDbRating}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Movie;
