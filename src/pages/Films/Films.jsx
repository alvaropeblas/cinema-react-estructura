import { Card, Pagination } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useAnimeSearch } from "../../hooks/useAnimeSearch";
import { SkeletonFilms } from "../../components/skeletons/SkeletonFilms";
import { useSelector } from "react-redux";
import FavStar from "../../components/FavStar";

function Films() {
  const {
    genres,
    changePage,
    searchAnimeByGenreThunk,
    searchAnimeByInputThunk,
  } = useAnimeSearch();

  const { animes, isLoading, page } = useSelector(state => state.animes)
  const onPageChangeHandler = (newPage) => {
    changePage(newPage);
  };
  const renderGenreOptions = () => {
    return genres?.map((genre) => (
      <option key={genre.mal_id} id={genre.mal_id} value={genre.mal_id} className="text-black">
        {genre.name}
      </option>
    ));
  };

  const renderFilmCards = () => {
    return isLoading
      ? Array.from({ length: 10 }).map((_, index) => (
        <SkeletonFilms key={index} />
      ))
      : animes?.map((film) => (
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
            <FavStar />
          </Card >
        </NavLink>
      ));
  };


  const handleGenreChange = (e) => {
    searchAnimeByGenreThunk(e)
  };

  return (
    <section className="mt-16 relative">
      <div className="flex items-center justify-around w-90" >
        <select className="w-[300px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" onChange={(e) => handleGenreChange(e.target.value)}>
          {renderGenreOptions()}
        </select>
        <h1 className="font-rubiksh text-gray-200 font-extrabold text-4xl mb-4">
          Animes en cartelera
        </h1>
        <div >
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              onChange={(e) => searchAnimeByInputThunk(e.target.value, page)}
              id="default-search"
              className=" w-[350px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search animes..."
              required
            />
          </div>
        </div>

      </div>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {renderFilmCards()}
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={page}
          totalPages={5}
          onPageChange={onPageChangeHandler}
          showIcons
        />
      </div>
    </section>

  );
}

export default Films;
