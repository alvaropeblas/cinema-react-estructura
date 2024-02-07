import { Card } from 'flowbite-react'
import ghost from '../../../public/images/ghost.png'
import React from 'react'
import { useSelector } from 'react-redux'

const Entradas = () => {
    const { entradas } = useSelector((state) => state.entradas)
    return (
        <>
            <h1>Entradas</h1>
            <div className='flex-col justify-center items-center w-screen'>
                {entradas.length > 0 ? (

                    entradas.map((entrada, index) => (
                        <Card key={index} className="max-w-sm" imgSrc={ghost} horizontal>
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
                    <p>No hay entradas disponibles.</p>
                )}
            </div>
        </>
    )
}

export default Entradas