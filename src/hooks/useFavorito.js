import { useDispatch, useSelector } from "react-redux";
import { setFavourite, getFavourites } from "../features/favoritas/favoritasSlice";

export function useFavorito() {
    const dispatch = useDispatch();
    const favoritas = useSelector((state) => state.favoritas.favoritas);

    const guardarFavorito = (data) => {
        dispatch(setFavourite(data));
    }

    const obtenerFavoritos = () => {
        return getFavourites();

    }

    return {
        guardarFavorito,
        obtenerFavoritos
    }
}
