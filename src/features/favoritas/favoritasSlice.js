import { createSlice } from '@reduxjs/toolkit';

export const favoritasSlice = createSlice({
    name: 'favoritas',
    initialState: {
        favoritas: [],
    },
    reducers: {
        setFavourite: (state, action) => {
            state.favoritas.push(action.payload);
        },
        delFavourite: (state, action) => {
            state.favoritas = state.favoritas.filter(item => item !== action.payload);
        },
        getFavourites: (state) => {
            return state.favoritas;
        },
    },
});

export const { setFavourite, delFavourite, getFavourites } = favoritasSlice.actions;

export default favoritasSlice.reducer;
