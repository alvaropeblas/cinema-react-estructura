import { getAmimeByGenre, getAmimeById, getAnime } from "../../services/films"
import { setAnimes, startLoadingAnimes, setCurrentAnime } from "./animeSlice"



export const searchAnime = (term, page) => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingAnimes());
            const searchResult = await getAnime(term, page);
            dispatch(setAnimes({ animes: searchResult }));
        } catch (error) {
            console.error("Error fetching anime:", error);
        }
    };
};

export const searchAnimeByGenre = (genreId) => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingAnimes());
            const searchResult = await getAmimeByGenre(genreId);
            dispatch(setAnimes({ animes: searchResult }));
        } catch (error) {
            console.error("Error fetching anime:", error);
        }
    };
};

export const searchAnimeById = (id) => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingAnimes());
            const searchResult = await getAmimeById(id);
            dispatch(setCurrentAnime({ currentAnime: searchResult }));
        } catch (error) {
            console.error("Error fetching anime:", error);
        }
    };
};

export const searchAnimeByInput = (animeText, page) => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingAnimes());
            const searchResult = await getAnime(animeText, page);
            dispatch(setAnimes({ animes: searchResult }));
        } catch (error) {
            console.error("Error fetching anime:", error);
        }
    };
};