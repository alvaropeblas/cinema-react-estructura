
const ANIME_BY_ID = 'https://api.jikan.moe/v4/anime/'
const ANIME_GENRES = 'https://api.jikan.moe/v4/genres/anime'

export async function getAnime(animeName, page) {
    const allAnime = [];
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}&page=${page}&sfw=true`);

        if (!response.ok) {
            throw new Error('Hubo un problema con la solicitud');
        }

        const data = await response.json();
        // Almacena los datos en el array
        allAnime.push(data.data);

    } catch (error) {
        console.error('Error en la solicitud:', error);
        // No necesitas lanzar el error de nuevo aquí, puedes simplemente manejarlo y continuar con el bucle.
    }
    return allAnime[0];
}
export async function getAmimeById(id) {
    try {
        const response = await fetch(ANIME_BY_ID + id);
        if (!response.ok) {
            throw new Error('Hubo un problema con la solicitud');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};

export async function getAmimeGenres() {
    try {
        const response = await fetch(ANIME_GENRES);
        if (!response.ok) {
            throw new Error('Hubo un problema con la solicitud');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};
