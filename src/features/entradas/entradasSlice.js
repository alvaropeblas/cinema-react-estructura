import { createSlice } from '@reduxjs/toolkit'

export const entradasSlice = createSlice({
    name: 'entradas',
    initialState: {
        entradas: [],
    },
    reducers: {

        setEntradas: (state, action) => {
            console.log(action.payload);
            state.entradas.push(action.payload)
        },
        getEntradas: (state) => {
            return state.entradas;
        }
    },
})

export const { setEntradas, getEntradas } = entradasSlice.actions

export default entradasSlice.reducer


