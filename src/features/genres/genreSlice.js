import { createSlice } from '@reduxjs/toolkit'

export const filmsSlice = createSlice({
    name: 'genres',
    initialState: {
        genres: [],
    },
    reducers: {
        setGenres: (state, action) => {
            state.genres = action.payload.genres;
        },
    },
})

export const { setGenres } = filmsSlice.actions

export default filmsSlice.reducer

