import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import { Trailer } from "../../components/Trailer";
import { BookingModal } from "../../components/modal/BookingModal";
import { useSelector } from "react-redux";
import { useAnimeSearch } from "../../hooks/useAnimeSearch";

export async function loader({ params }) {
    const id = params.id;
    return { id };
}
function FilmDetails() {
    const { id } = useParams();
    const {
        searchAnimeByIdThunk,
    } = useAnimeSearch();
    const { currentAnime } = useSelector(state => state.animes)
    useEffect(() => {
        searchAnimeByIdThunk(id);
    }, []);
    return (
        <div className="">
            {currentAnime && (
                <>
                    <div className="flex items-center justify-around mt-16 ">
                        <img className="w-[20vw]" src={currentAnime.images.webp.image_url} alt={currentAnime.title} />
                        <div className="w-[35vw] flex-col items-center justify-center">
                            <h1 className="uppercase text-4xl font-rubiksh">{currentAnime.title}</h1>
                            <br />
                            <p><strong className="font-quicksand">Episodes:</strong> {currentAnime.episodes}</p>
                            <p><strong className="font-quicksand">Duration:</strong> {currentAnime.duration}</p>
                            <br />
                            <p className="font-quicksand"><strong className="font-quicksand">Synopsis:</strong> {currentAnime.synopsis}</p>
                            <br />
                            <div className="ml-[40%]">
                                <BookingModal name={currentAnime.title} />
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-solid">
                        <h1 className="uppercase text-4xl font-rubiksh m-12 ">Trailer</h1>
                    </div>
                    <div className="ml-[25%]">
                        <div >
                            <Trailer title={currentAnime.title} url={currentAnime.trailer.embed_url} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default FilmDetails;
