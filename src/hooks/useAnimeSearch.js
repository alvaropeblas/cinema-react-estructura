import { useEffect, useState } from "react";
import { getAmimeGenres, getAnime, getAmimeById, getAmimeByGenre } from "../services/films";

// Hook personalizado para manejar las consultas de anime
export function useAnimeSearch() {
    const [isLoading, setIsLoading] = useState(true);
    const [anime, setAnime] = useState([]);
    const [animeData, setAnimeData] = useState()
    const [genres, setGenres] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFavourite, setIsFavourite] = useState(false)

    // Función para buscar anime por identificador
    async function fetchAnimeData(id) {
        try {
            const data = await getAmimeById(id);
            setAnimeData(data);
        } catch (error) {
            console.error("Error fetching film details:", error);
        }
    }

    // Función para buscar anime con un término de búsqueda
    async function searchAnime(term) {
        setIsLoading(true);
        try {
            const searchResult = await getAnime(term, currentPage);
            setAnime(searchResult);
        } catch (error) {
            console.error("Error fetching anime:", error);
        } finally {
            setIsLoading(false);
        }
    }
    async function searchAnimebyGenre(genreId) {
        setIsLoading(true);
        try {
            const searchResult = await getAmimeByGenre(genreId);
            setAnime(searchResult);
        } catch (error) {
            console.error("Error fetching anime:", error);
        } finally {
            setIsLoading(false);
        }
    }

    // Función para obtener los géneros de anime
    async function fetchAnimeGenres() {
        try {
            const animeGenres = await getAmimeGenres();
            setGenres(animeGenres);
        } catch (error) {
            console.error("Error fetching anime genres:", error);
        }
    }

    // Función para cambiar la página actual
    function changePage(page) {
        setCurrentPage(page);
    }

    // Efecto para cargar los géneros cuando se monta el componente
    useEffect(() => {
        fetchAnimeGenres();
    }, []);

    // Efecto para buscar anime cuando cambia la página actual
    useEffect(() => {
        searchAnime("");
    }, [currentPage]);



    return {
        isLoading,
        anime,
        animeData,
        genres,
        currentPage,
        searchAnime,
        changePage,
        fetchAnimeData,
        searchAnimebyGenre,
        fetchAnimeGenres,
    };
}
