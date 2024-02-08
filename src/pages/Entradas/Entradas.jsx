import { Card } from 'flowbite-react'
import ghost from '../../../public/images/ghost.png'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Entradas = () => {
    const { entradas } = useSelector((state) => state.entradas)
    return (
        <>
            <h1 className='font-rubiksh text-gray-200 font-extrabold text-4xl mb-4'>Entradas</h1>

            {entradas.length > 0 ? (
                entradas.map((entrada, index) => (
                    <Card key={index} className="max-w-sm ml-[25%] mt-10" imgSrc={entrada.imagen} horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {entrada.anime}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Nombre: {entrada.name}
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Email: {entrada.email}
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Hora: {entrada.hour}
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Precio: {entrada.precio}
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Nº Asientos: {entrada.seat}
                        </p>
                    </Card>
                ))

            ) : (
                <div>
                    <p className="space-x-4 mt-10">No hay entradas disponibles.</p>
                    <div className="space-x-4 mt-10">
                        <Link
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary-200 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-200/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                            to="/animago/films"
                        >
                            Reserva tu entrada ahora
                        </Link>
                    </div>
                </div>
            )}

        </>
    )
}

export default Entradas