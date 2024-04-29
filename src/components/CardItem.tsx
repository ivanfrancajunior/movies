import { Movie } from "../hooks/useMovies";
import fallback from "../assets/images/no-image-icon-23494.png";
import { formateDate } from "../utils/dateFormate";

type Props = {
  movie: Movie;
};

const CardItem = ({ movie }: Props) => {
  return (
    <div className='card w-72 rounded-md bg-base-200  shadow-xl transition  duration-150 hover:scale-105'>
      <figure>
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : fallback
          }
          alt={movie.title}
        />
      </figure>
      <div className='card-body p-6'>
        <h2 className='card-title text-accent'>{movie.original_title}</h2>
        <div className='flex items-center justify-between'>
          <strong>Release:</strong>
          <span> {formateDate(movie.release_date)}</span>
        </div>
        <div className='flex items-center justify-between'>
          <strong>Votes:</strong>
          <span> {movie.vote_average} ⭐</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
