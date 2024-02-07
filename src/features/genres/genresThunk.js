import { getAmimeGenres } from "../../services/films"
import { setGenres } from "./genreSlice";


export const searchGenres = () => {
    return async (dispatch) => {
        try {
            const animeGenres = await getAmimeGenres();

            dispatch(setGenres({ genres: animeGenres }));
        } catch (error) {
            console.error("Error fetching anime:", error);
        }
    };
};

