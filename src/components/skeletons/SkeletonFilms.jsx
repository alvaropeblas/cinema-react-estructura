import { Card } from "flowbite-react";
import loadingImage from "../../../public/images/ghost.png"

export function SkeletonFilms(key) {
    return (
        <Card
            key={key}
            className="max-w-sm animate-pulse"
            imgAlt="cargando"
            imgSrc={loadingImage}
        >
        </Card>
    );
}
