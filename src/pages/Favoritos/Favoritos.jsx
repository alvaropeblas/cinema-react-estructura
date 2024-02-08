import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFavorito } from '../../hooks/useFavorito';
import { Card } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';

const Favoritos = () => {
    const dispatch = useDispatch();
    const { favoritas } = useSelector((state) => state.favoritas);

    return (
        <>
            <h1 className='font-rubiksh text-gray-200 font-extrabold text-4xl mb-4'>Favoritas</h1>

            {favoritas.length > 0 ? (
                favoritas.map((film) => (
                    <NavLink key={film.mal_id} to={`/animago/filmDetails/${film.mal_id}`}>
                        <Card
                            key={film.mal_id}
                            className="max-w-sm font-quicksand"
                            imgAlt={film.title}
                            imgSrc={film.images.jpg.image_url}
                        >
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {film.title}
                            </h5>
                        </Card >
                    </NavLink>
                ))

            ) : (
                <div>
                    <p className="space-x-4 mt-10">No hay favoritas disponibles.</p>
                    <div className="space-x-4 mt-10">
                        <Link
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary-200 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-200/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                            to="/animago/films"
                        >
                            Echa un vistazo al catalogo
                        </Link>
                    </div>
                </div>
            )}

        </>
    );
};

export default Favoritos;
