import { NavLink, Link } from "react-router-dom";
import { useState } from "react"
import ghost from "../../public/images/ghost.png";
import { getAnimeByName } from "../services/films";
const links = [
    { name: "Home", path: "/" },
    { name: "Films", path: "/films" },
];
const link = { name: "FilmDetails", path: "/FilmDetails" }

const activeLinkClass = 'block py-2 px-3 text-primary-500 rounded md:p-0'
const linkClass = 'block py-2 px-3 text-white rounded hover:text-primary-600 md:p-0'

let timeoutId
function AppNavbar() {
    const [searchTerm, setSearchTerm] = useState();
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(false);


    async function handleAnimeSearch() {
        clearTimeout(timeoutId);
        const input = document.querySelector('input[type="search"]');
        const newSearchTerm = input.value;
        setSearchTerm((search) => newSearchTerm);
        timeoutId = setTimeout(async () => {
            const search = await getAnimeByName(newSearchTerm);
            setSearchResult(search);
            setShowResults(true);
        }, 600);
    }

    const clearSearchResults = () => {
        setSearchResult([]);
        setShowResults(false);
    };

    return (
        <nav className="bg-darksurf-200 rounded-md mb-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={ghost} className="h-8" alt="Web Logo" />
                    <span className="self-center text-2xl font-semibold text-gray-200 whitespace-nowrap">AnimaGo</span>
                </Link>

                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <NavLink key={index} to={link.path} className={({ isActive }) =>
                                        isActive ? activeLinkClass : linkClass
                                    }>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" /* onBlur={clearSearchResults} */ onKeyUp={handleAnimeSearch} id="default-search" className="block w-[350px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search animes..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primary-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-100 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        {showResults && (
                            <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 mt-2 w-[350px] rounded-lg overflow-hidden shadow-lg">
                                {searchResult.length > 0 ? (
                                    <ul className="divide-y divide-gray-300">
                                        {searchResult.map((result, index) => (
                                            <Link key={result.mal_id} to={link.path + "/" + result.mal_id} className="p-3">
                                                <p className=" text-black hover:text-primary-100">{result.title}</p>
                                            </Link>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="p-3">No se encontraron resultados.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default AppNavbar