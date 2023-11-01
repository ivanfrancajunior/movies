import { useState, useEffect } from "react";
import { SingleMovie } from "../components/SingleMovie";

interface MovieItem {
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
  realised_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export const Home = () => {
  const [movieList, setMovieList] = useState<MovieItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const url = `https://api.themoviedb.org/3/movie/top_rated?page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.TMDB_KEy}`,
    },
  };
  const imagePath = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const json = await response.json();
        setMovieList(json.results);
        console.log(json.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [page]);

  return (
    <div className="container flex flex-col h-full mx-auto items-center ">
      <h2>titulo mto elegante</h2>
      <div>
        <button onClick={() => setPage((c) => c + 1)}> + </button>
        <button onClick={() => setPage((c) => c - 1)}> - </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        {loading && <p>carregando...</p>}
      </div>
      <div className="flex flex-wrap justify-center gap-5 py-24 max-w-5xl ">
        {!loading &&
          movieList &&
          movieList.map((movie) => (
            <SingleMovie
              key={movie.id}
              url={imagePath + movie.poster_path}
              name={movie.original_title}
              vote={movie.vote_count}
            />
          ))}
      </div>
    </div>
  );
};
