import { Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Favoritos = () => {
    const [favoritas, setFavoritas] = useState([]);

    useEffect(() => {
        // Obtener la lista de favoritos del localStorage
        const favList = JSON.parse(localStorage.getItem('favList')) || [];
        setFavoritas(favList);
    }, []);

    return (
        <>
            <h1 className='font-rubiksh text-gray-200 font-extrabold text-4xl mb-4'>Favoritas</h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {favoritas.length > 0 ? (
                    favoritas.map((film) => (
                        <div key={film.mal_id} className='ml-6 mb-6'>
                            <NavLink to={`/animago/filmDetails/${film.mal_id}`}>
                                <Card
                                    className="max-w-sm font-quicksand"
                                    imgAlt={film.title}
                                    imgSrc={film.images.jpg.image_url}
                                >
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {film.title}
                                    </h5>
                                </Card>
                            </NavLink>
                        </div>
                    ))
                ) : (
                    <div>
                        <p className="space-x-4 mt-10">No hay favoritas disponibles.</p>
                        <div className="space-x-4 mt-10">
                            <Link
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary-200 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-200/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                                to="/animago/films"
                            >
                                Echa un vistazo al catálogo
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Favoritos;
