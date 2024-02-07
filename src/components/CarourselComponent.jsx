import { Carousel } from 'flowbite-react';
import { useAnimeSearch } from '../hooks/useAnimeSearch';
import { SkeletonFilms } from './skeletons/SkeletonFilms';
import { useSelector } from 'react-redux';

function CarouselComponent() {
    const { animes } = useSelector(state => state.animes);

    return (
        <section className="flex items-center justify-center w-full h-[700px] m-10 mt-10">
            {animes?.length > 0 ? (
                <Carousel
                    slideInterval={1700}
                    className="w-[70%] h-[100%] overflow-hidden rounded-md shadow-md"
                >
                    {animes.map((animeItem) => (
                        <img
                            key={animeItem.mal_id}
                            src={animeItem.images.webp.large_image_url}
                            alt={animeItem.title}
                            className="w-full h-[100%] rounded-md"
                        />
                    ))}
                </Carousel>
            ) : (
                <div className="flex w-[70%] h-[100%]">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonFilms key={index} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default CarouselComponent;
