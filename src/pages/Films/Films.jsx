import { useEffect, useState } from "react";
import { getAllAnimes, getAmimeGenres } from "../../services/films";
import { Card, Pagination } from "flowbite-react";
import ghost from "../../../public/images/ghost.png";
import { NavLink } from "react-router-dom";

function Films() {
  const [isLoading, setIsLoading] = useState(true)
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const link = { name: "FilmDetails", path: "/filmDetails" }
  async function fetchAnime() {
    try {
      const animeData = await getAllAnimes(currentPage);
      return animeData;
    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  }
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
        imgSrc={ghost}
      >
      </Card>
    );
  }



  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    setIsLoading(true);
    fetchAnime().then((data) => {
      setFilms(data);
    }).finally(() => setIsLoading(false));
  }, [currentPage]);

  useEffect(() => {
    fetchAnimeGenres().then((data) => {
      setGenres(data);
    });
  }, []);
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
