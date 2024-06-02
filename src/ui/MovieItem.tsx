import { RiStarFill } from "react-icons/ri";
import { Movie } from "../hooks/useLatestMovies";
import { formateDate } from "../utils/dateFormater";
import { Link } from "react-router-dom";
import SvgComponent from "./SvgComponent";
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
type Props = {
  movie: Movie;
};
const MovieItem = ({ movie }: Props) => {
  return (
    <div className='flex flex-col items-start justify-center w-full bg-[#121212] gap-2 pb-4'>
      <div className='flex bg-[#080808] justify-center min-h-[250px] h-auto w-full '>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=''
          className='w-auto h-auto bg-cover'
        />
      </div>
      <div className='flex flex-wrap w-full px-8 text-xl items-center justify-center text-white font-bold text-center mb-4'>
        {movie.title}
      </div>
      <div className='px-4'>
        <p>
          <span className='text-zinc-400'>Release</span>{" "}
          <span className='text-white font-semibold'>
            {formateDate(new Date(movie.release_date))}
          </span>
        </p>
        <div className='space-x-1 uppercase text-sm flex mt-2 font-semibold '>
          {movie.genre_ids.map((item) => (
            <span className='badge bg-neutral rounded-full' key={item}>
              {genres.find((genre) => genre.id === item)
                ?.name || ""}
            </span>
          ))}
        </div>
      </div>

      <div className='flex h-10 w-full  items-center justify-between px-4 text-white font-bold'>
        <div className='flex items-center justify-center gap-1 '>
          <span>{movie.vote_average.toFixed(2)}</span>
          <RiStarFill size={14} color='yellow' />
        </div>
        <button>
          <Link to={`/movie/${movie.id}`}>
            <SvgComponent />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
