import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../features/animes/animeSlice";
import { searchAnime, searchAnimeByGenre, searchAnimeById, searchAnimeByInput } from "../features/animes/animesThunk";
import { searchGenres } from "../features/genres/genresThunk";
export function useAnimeSearch() {
    const dispatch = useDispatch();
    const { animes, isLoading, page, currentAnime } = useSelector(state => state.animes);
    const { genres } = useSelector(state => state.genres);
    const searchAnimeThunk = () => dispatch(searchAnime("", page));
    const searchGenresThunk = () => dispatch(searchGenres());
    const searchAnimeByGenreThunk = (genreId) => dispatch(searchAnimeByGenre(genreId))
    const searchAnimeByIdThunk = (animeId) => {
        dispatch(searchAnimeById(animeId))
    }
    const searchAnimeByInputThunk = (animeText, page) => dispatch(searchAnimeByInput(animeText, page))


    useEffect(() => {
        searchAnimeThunk();
    }, [page]);

    useEffect(() => {
        searchGenresThunk();
    }, []);

    function changePage(newPage) {
        dispatch(setCurrentPage(newPage));
        dispatch(searchAnime("", newPage));
    }

    return {
        currentAnime,
        animes,
        genres,
        isLoading,
        searchAnimeThunk,
        changePage,
        searchAnimeByGenreThunk,
        searchAnimeByIdThunk,
        searchAnimeByInputThunk,
    };
}
