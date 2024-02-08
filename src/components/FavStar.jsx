
import { Rating, RatingStar } from 'flowbite-react';
import { useSelector } from 'react-redux';

function FavStar() {
/*     const { favourites } = useSelector((state) => state.favorites.isFavorite)
 */    return (
        <Rating>
            <RatingStar filled={false} />
        </Rating>
    );
}
export default FavStar
