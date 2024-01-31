import { Carousel } from 'flowbite-react';
import { useAnimeSearch } from '../hooks/useAnimeSearch';


function SkeletonImage() {
    return (
        <div className="w-[150px] h-[600px] bg-gray-300 rounded animate-pulse"></div>
    );
}
function CarourselComponent() {
    const { anime } = useAnimeSearch();
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

export default CarourselComponent;
