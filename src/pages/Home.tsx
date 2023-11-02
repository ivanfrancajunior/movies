import { useState, useEffect } from "react";
import { SingleMovie } from "../components/SingleMovie";
import { options } from "../utils";
import { MovieItem } from "../types/types";
import Spinner from "../components/Spinner";
import { imagePath } from "../utils";
import { ResultsCount } from "../components/ResultsCount";

export const Home = () => {
  const [movieList, setMovieList] = useState<MovieItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const url = `https://api.themoviedb.org/3/movie/top_rated?page=${page}?language=pt-BR`;

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const json = await response.json();
        setTotalResults(json.total_results);
        setTotalPages(json.total_pages);
        console.log(json);

        setMovieList(json.results);
        console.log(json.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [page]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container flex flex-col h-full mx-auto items-center ">
      

      <h2 className="text-4xl font-bold mt-10">
        Obtenha uma lista de filmes ordenados por classificação
      </h2>

      <div className="flex flex-wrap justify-center ">{loading && <Spinner />}</div>
      <div className="flex flex-wrap items-center justify-center gap-5 py-24 max-w-5xl ">
        {movieList &&
          movieList.map((movie) => (
            <SingleMovie
              key={movie.id}
              url={imagePath + movie.poster_path}
              name={movie.original_title}
              vote={movie.vote_count}
              id={movie.id}
            />
          ))}
      </div>
      <div className="mb-10">

      <ResultsCount total={totalResults} setPage={setPage} totalPages={totalPages} page={page}  />
      </div>
    </div>
  );
};
