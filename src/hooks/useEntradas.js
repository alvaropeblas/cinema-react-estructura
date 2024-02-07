import { useDispatch } from "react-redux";
import entradasSlice, { setEntradas, getEntradas } from "../features/entradas/entradasSlice";

export function useEntradas() {
    const dispatch = useDispatch();

    const useGuardarEntradas = (data) => {
        dispatch(setEntradas(data));
    }

    const useObtenerEntradas = () => {
        return getEntradas()
    }

    return {
        useObtenerEntradas,
        useGuardarEntradas
    }
}