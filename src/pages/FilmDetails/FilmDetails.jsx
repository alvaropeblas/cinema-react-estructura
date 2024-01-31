import { useLoaderData } from "react-router-dom";
import { getAmimeById } from "../../services/films";
import { useEffect, useState } from "react";
import { Trailer } from "../../components/Trailer";
import { useAnimeSearch } from "../../hooks/useAnimeSearch";

export async function loader({ params }) {
    const id = params.id;
    return { id };
}
function FilmDetails() {
    const { id } = useLoaderData();
    const { animeData, fetchAnimeData } = useAnimeSearch()
    useEffect(() => {
        if (id) {
            fetchAnimeData(id);
        }
    }, [id]);
    return (
        <div className="">
            {animeData && (
                <>
                    <h1 className="">{animeData.title}</h1>
                    <div className="flex items-center justify-around">
                        <img className="film-poster" src={animeData.images.webp.image_url} alt={animeData.title} />
                        <div className="film-details-info">
                            <p><strong>Episodes:</strong> {animeData.episodes}</p>
                            <p><strong>Duration:</strong> {animeData.duration}</p>
                            <p><strong>Synopsis:</strong> {animeData.synopsis}</p>
                        </div>
                    </div>           
                        <Trailer title={animeData.title} url={animeData.trailer.embed_url} />
                </>
            )}
        </div>
    );
}

export default FilmDetails;
