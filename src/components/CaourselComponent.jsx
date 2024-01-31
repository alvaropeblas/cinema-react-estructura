import { Carousel } from 'flowbite-react';
import { getTopAmime } from "../services/films";
import { useState, useEffect } from 'react';

async function fetchAnime() {
    try {
        const animeData = await getTopAmime();
        return animeData;
    } catch (error) {
        console.error("Error fetching anime:", error);
        return [];
    }
}
function SkeletonImage() {
    return (
        <div className="w-[150px] h-[600px] bg-gray-300 rounded animate-pulse"></div>
    );
}
function CaourselComponent() {
    const [anime, setAnime] = useState([]);

    useEffect(() => {
        fetchAnime().then((data) => setAnime(data));
    }, []);

    return (
        <section className='flex w-[40%] h-[600px] m-10 ml-[30%]'>
            {anime.length > 0 ? (
                <Carousel slideInterval={1700}>
                    {anime.map((animeItem) => (
                        <img
                            key={animeItem.mal_id}
                            src={animeItem.images.webp.large_image_url}
                            alt={animeItem.title}
                            className='w-[500px] flex-grow object-cover'
                        />
                    ))}
                </Carousel>
            ) : (
                Array.from({ length: 5 }).map((_, index) => (
                    <SkeletonImage key={index} />
                ))
            )}
        </section>
    );
}

export default CaourselComponent;
