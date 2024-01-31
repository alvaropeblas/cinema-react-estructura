import { useEffect, useState } from "react";
import {getAmimeGenres, getAnime } from "../../services/films";
import { Card, Pagination } from "flowbite-react";
import loadingImage  from "../../../public/images/ghost.png";
import { NavLink } from "react-router-dom";
let timeoutId
function Films() {
  const [isLoading, setIsLoading] = useState(true)
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);



  async function fetchAnime(e) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      const search = await getAnime(e, currentPage);
      setFilms(search)
    }, 300);
  }

  useEffect(() => {
    fetchAnimeGenres().then((data) => {
      setGenres(data);
    });
  }, []);


  const link = { name: "FilmDetails", path: "/filmDetails" }

  async function fetchAnimeGenres() {
    try {
      const animeData = await getAmimeGenres();
      return animeData;
    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  }

  function SkeletonImage() {
    return (
      <Card
        key={1}
        className="max-w-sm animate-pulse"
        imgAlt="cargando"
        imgSrc={loadingImage }
      >
      </Card>
    );
  }



  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    setIsLoading(true);
    fetchAnime("", currentPage).then((data) => {
      setFilms(data);
    }).finally(() => setIsLoading(false));
  }, [currentPage]);



  return (
    <section className="mt-16">
      <div className="absolute left-50">
        <select>
          {genres?.map((genre) => (
            <option key={genre.mal_id} value={genre.mal_id}>{genre.name}</option>
          ))}
        </select>
      </div>

      <h1 className="font-rubiksh text-gray-200 font-extrabold text-4xl mb-4">
        Animes en cartelera
      </h1>
      <div className="absolute right-[14%] top-[20%]">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" onChange={(e) => fetchAnime(e.target.value, currentPage)} id="default-search" className="block w-[350px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search animes..." required />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <SkeletonImage key={index} />
          ))
        ) : (
          films?.map((film) => (
            <Card
              key={film.mal_id}
              className="max-w-sm"
              imgAlt={film.title}
              imgSrc={film.images.jpg.image_url}
            >
              <NavLink key={film.mal_id} to={link.path + "/" + film.mal_id}>
                <h5 clNavLinkssName="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {film.title}
                </h5>
              </NavLink>
            </Card>
          ))
        )}
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination currentPage={currentPage} totalPages={5} onPageChange={onPageChange} showIcons />
      </div>
    </section>
  );
}

export default Films;
