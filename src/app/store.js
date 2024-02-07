import { configureStore } from '@reduxjs/toolkit'
import animeReducer from '../features/animes/animeSlice'
import genreReducer from '../features/genres/genreSlice'

export default configureStore({
    reducer: {
        animes: animeReducer,
        genres: genreReducer,
    },
})