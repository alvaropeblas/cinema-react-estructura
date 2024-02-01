import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { Trailer } from "../../components/Trailer";
import { useAnimeSearch } from "../../hooks/useAnimeSearch";
import { BookingModal } from "../../components/modal/BookingModal";

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
                    <div className="flex items-center justify-around mt-16">
                        <img className="w-[20vw]" src={animeData.images.webp.image_url} alt={animeData.title} />
                        <div className="w-[35vw] flex-col items-center justify-center">
                            <h1 className="uppercase text-4xl font-rubiksh">{animeData.title}</h1>
                            <br />
                            <p><strong className="font-quicksand">Episodes:</strong> {animeData.episodes}</p>
                            <p><strong className="font-quicksand">Duration:</strong> {animeData.duration}</p>
                            <br />
                            <p className="font-quicksand"><strong className="font-quicksand">Synopsis:</strong> {animeData.synopsis}</p>
                            <br />
                            <div className="ml-[40%]">
                                <BookingModal name={animeData.title} />
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] h-[400px]  flex justify-between items-center">
                        <h1 className="uppercase text-4xl font-rubiksh">Trailer</h1>
                        <Trailer title={animeData.title} url={animeData.trailer.embed_url} />
                    </div>
                </>
            )}
        </div>
    );
}

export default FilmDetails;
