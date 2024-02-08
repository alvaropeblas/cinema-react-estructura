import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import './index.css'
import Home from './pages/Home/Home.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Films from './pages/Films/Films.jsx'
import AppNavbar from './components/AppNavbar.jsx'
import AppFooter from "./components/AppFooter.jsx";
import FilmDetails from './pages/FilmDetails/FilmDetails.jsx';
import { loader as filmDetailsLoader } from './pages/FilmDetails/FilmDetails.jsx';
import store from './app/store.js';
import { Provider } from 'react-redux';
import Entradas from './pages/Entradas/Entradas.jsx';
import Favoritos from './pages/Favoritos/Favoritos.jsx';
function AppLayout() {
  return <>
    <Provider store={store}>
      <AppNavbar />
      <Outlet />
      <AppFooter />
    </Provider>
  </>
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/animago",
      element: <Home />,
    },
    {
      path: "/animago/films",
      element: <Films />,
    },
    {
      path: "/animago/filmDetails/:id",
      element: <FilmDetails />,
      loader: filmDetailsLoader
    },
    {
      path: "/animago/entradas",
      element: <Entradas />,
    },
    {
      path: "/animago/favoritos",
      element: <Favoritos />,
    }]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
