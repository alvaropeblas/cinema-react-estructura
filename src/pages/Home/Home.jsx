import { useState } from "react";
import { Link } from "react-router-dom";
import CarourselComponent from "../../components/CarourselComponent";

function Home() {
  return (
    <>

      <div className="h-[50vh] mt-[10%] ">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Bienvenido a <span className='text-primary-200'>AnimaGo</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400">
              Vive la magia de las películas como nunca antes
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary-200 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-200/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
              to="/films"
            >
              Reserva tu entrada ahora
            </Link>
          </div>
        </div>
      </div>


      <section className="mt-10">
        <h1 className='font-rubiksh text-3xl text-gray-200 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>Top Animes</h1>
        <CarourselComponent />
      </section>

    </>
  )
}

export default Home
