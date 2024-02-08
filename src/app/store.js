import { configureStore } from '@reduxjs/toolkit'
import animeReducer from '../features/animes/animeSlice'
import genreReducer from '../features/genres/genreSlice'
import entradasReducer from '../features/entradas/entradasSlice'

export default configureStore({
    reducer: {
        animes: animeReducer,
        genres: genreReducer,
        entradas: entradasReducer,
    },
})