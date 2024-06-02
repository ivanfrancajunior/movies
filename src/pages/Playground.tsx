import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SvgComponent from "../ui/SvgComponent";
import { formateDate } from "../utils/dateFormater";

const random_movie = {
  adult: false,
  backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
  genre_ids: [878, 12, 28],
  id: 653346,
  original_language: "en",
  original_title: "Kingdom of the Planet of the Apes",
  overview:
    "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
  popularity: 8691.608,
  poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
  release_date: "2024-05-08",
  title: "Kingdom of the Planet of the Apes",
  video: false,
  vote_average: 6.954,
  vote_count: 736,
};
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
    name: "Science Fiction",
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

const Playground = () => {
  console.log(genres.length);
  return (
    <div >
      <div className='flex flex-col items-start justify-center w-full bg-[#121212] gap-2 pb-4'>
        <div className='flex bg-[#080808] justify-center min-h-[250px] h-auto w-full '>
          <img
            src={`https://image.tmdb.org/t/p/original/${random_movie.backdrop_path}`}
            alt=''
            className='w-auto h-auto bg-cover'
          />
        </div>
        <div className='flex flex-wrap w-full px-8 text-xl items-center justify-center text-white font-bold text-center mb-4'>
          {random_movie.title}
        </div>
        <div className='px-4'>
          <p>
            <span className='text-zinc-400'>Release</span>{" "}
            <span className='text-white font-semibold'>
              {formateDate(
                new Date(random_movie.release_date)
              )}
            </span>
          </p>
          <div className='space-x-2 uppercase flex mt-2 font-bold '>
            {random_movie.genre_ids.map((item) => (
              <span className='badge  badge-neutral  '>
                {genres.find((genre) => genre.id === item)
                  ?.name || ""}
              </span>
            ))}
          </div>
        </div>

        <div className='flex h-10 w-full  items-center justify-between px-4 text-white font-bold'>
          <div className='flex items-center justify-center gap-1 '>
            <span>
              {random_movie.vote_average.toFixed(2)}
            </span>
            <RiStarFill size={14} color='yellow' />
          </div>
          <button>
            <Link to={`/movie/${random_movie.id}`}>
              <SvgComponent />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playground;
