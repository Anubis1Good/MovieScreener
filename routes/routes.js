import { Router } from 'express'
import { description, searchMovie, topMovies } from '../controllers/cinemaReq.js';
const router = Router()

//api
router.get('/top-movies',topMovies)
router.get('/search-movie/:name',searchMovie)
router.get('/description-movie/:id',description)


export default router