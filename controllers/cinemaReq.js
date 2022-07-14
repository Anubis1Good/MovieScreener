import imdb from "imdb-api";
import topMovie from "../forDev/topMovie.js";

const API_KEY = "c9e60bcd";
const cli = new imdb.Client({ apiKey: API_KEY });

//api key for https://imdb-api.com/api
const apiKey = "k_e82g6lu9";

export const topMovies = (req, res) => {
  const limit = Number(req.query._limit);
  const page = Number(req.query._page - 1);
  const startSlice = page * limit;
  const endSlice = startSlice + limit;
  const resMovies = {
    ...topMovie,
    items: topMovie.items.slice(startSlice, endSlice),
  };
  res.setHeader("x-total-count", topMovie.items.length);
  res.send(resMovies);
  /* Во время разработки случайно превысил лимит запросов на https://imdb-api.com/api .
   На все мои остальные почтовые адреса сайт https://imdb-api.com/api не отправляет сообщение с подтвреждением в ответ
   В связи с этим данные для демонтрации беру из запроса сделанного ранее
   Ниже код, который испольховался до этого
  */
  // fetch(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`)
  //   .then(res => res.json()).then(data => res.send(data)).catch(err=>console.log(err))
};
//запросы ниже обрабатываю с помощью сторонего api с огрниченным функционалом
export const searchMovie = (req, res) => {
  let params = req.params.name.substring(1);
  cli
    .search({ name: params })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

export const description = (req, res) => {
  let params = req.params.id.substring(1);

  cli
    .get({ id: params })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};
