import { createSlice } from '@reduxjs/toolkit'

export const filmsSlice = createSlice({
    name: 'animes',
    initialState: {
        page: 1,
        animes: [],
        currentAnime: null,
        isLoading: false,

    },
    reducers: {
        startLoadingAnimes: (state) => {
            state.isLoading = true;
        },
        setAnimes: (state, action) => {
            state.animes = action.payload.animes;
            state.isLoading = false;
        },
        setCurrentPage: (state, action) => {
            state.page = action.payload;
        },
        setCurrentAnime: (state, action) => {
            state.currentAnime = action.payload.currentAnime;
            state.isLoading = false;
        },

    },
})

export const { startLoadingAnimes, setAnimes, setCurrentPage, page, setCurrentAnime } = filmsSlice.actions

export default filmsSlice.reducer


