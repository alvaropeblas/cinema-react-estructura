import { useLoaderData } from "react-router-dom";
import { getAmimeById } from "../../services/films";
import { useEffect, useState } from "react";
import { Trailer } from "../../components/Trailer";

export async function loader({ params }) {
    const id = params.id;
    return { id };
}
function FilmDetails() {
    const [anime, setAnime] = useState();

    const { id } = useLoaderData();

    useEffect(() => {
        async function fetchAnimeData(id) {
            try {
                const data = await getAmimeById(id);
                setAnime(data);
            } catch (error) {
                console.error("Error fetching film details:", error);
            }
        }

        if (id) {
            fetchAnimeData(id);
        }
    }, [id]);

    return (
        <div>
            {anime && (
                <>
                    <h1>{anime.title}</h1>
                    <Trailer title={anime.title} url={anime.trailer.embed_url} />
                    <div className="flex items-center justify-around">
                        <img src={anime.images.webp.image_url} alt="" />
                        <div className="h-20 w-[50vw]">
                            <p>Episodes: {anime.episodes}</p>
                            <p>Duration: {anime.duration}</p>
                            <p>{anime.synopsis}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default FilmDetails;
