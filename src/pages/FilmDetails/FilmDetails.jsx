import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Trailer } from "../../components/Trailer";
import { BookingModal } from "../../components/modal/BookingModal";
import { useSelector } from "react-redux";
import { useAnimeSearch } from "../../hooks/useAnimeSearch";
import { Button } from "flowbite-react";
import { useFavorito } from '../../hooks/useFavorito'

export async function loader({ params }) {
    const id = params.id;
    return { id };
}
function FilmDetails() {
    const { guardarFavorito } = useFavorito()
    const [isFavo, setIsFavo] = useState(false)
    const { id } = useParams();
    const {
        searchAnimeByIdThunk,
    } = useAnimeSearch();
    const { currentAnime } = useSelector(state => state.animes)

    useEffect(() => {
        searchAnimeByIdThunk(id);
        const favList = JSON.parse(localStorage.getItem('favList')) || [];
        const isAlreadyInFavorites = favList.some((fav) => JSON.stringify(fav) === JSON.stringify(currentAnime));
        setIsFavo(isAlreadyInFavorites);

    }, [currentAnime]);

    const handleFavClick = () => {
        const favList = JSON.parse(localStorage.getItem('favList')) || [];
        const isAlreadyInFavorites = favList.some((fav) => JSON.stringify(fav) === JSON.stringify(currentAnime));
        if (!isAlreadyInFavorites) {
            favList.push(currentAnime);
            localStorage.setItem('favList', JSON.stringify(favList));
            setIsFavo(true);
        } else {
            const updatedFavList = favList.filter((fav) => JSON.stringify(fav) !== JSON.stringify(currentAnime));
            localStorage.setItem('favList', JSON.stringify(updatedFavList));
            setIsFavo(false);
        }
    };


    return (
        <div className="">
            {currentAnime && (
                <>
                    <div className="flex items-center justify-around mt-16 ">
                        <img className="w-[20vw]" src={currentAnime.images.webp.image_url} alt={currentAnime.title} />
                        <div className="w-[35vw] flex-col items-center justify-center">
                            <h1 className="uppercase text-4xl font-rubiksh">{currentAnime.title} </h1>
                            <br />
                            <p><strong className="font-quicksand">Episodes:</strong> {currentAnime.episodes}</p>
                            <p><strong className="font-quicksand">Duration:</strong> {currentAnime.duration}</p>
                            <br />
                            <p className="font-quicksand"><strong className="font-quicksand">Synopsis:</strong> {currentAnime.synopsis}</p>
                            <br />
                            <div className="flex items-center justify-around ml-[10%] w-[500px]">
                                <BookingModal name={currentAnime.title} imagen={currentAnime.images.webp.image_url} />
                                <Button className='w-[10em]' onClick={handleFavClick}>
                                    <p className='text-white'>{isFavo ? 'Eliminar de favoritos' : 'Añadir a favoritos'}</p>
                                </Button>

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
