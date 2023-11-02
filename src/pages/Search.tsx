import { useParams } from "react-router-dom";
import { options } from "../utils";
import { useEffect, useState } from "react";
import { SingleMovie } from "../components/SingleMovie";
import { MovieItem } from "../types/types";
import NotfoundImage from "../../public/no-image-icon-23494.png";
import Spinner from "../components/Spinner";
const Search = () => {
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<MovieItem[]>([]);
  console.log(query);
  const imagePath = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`;

      setLoading(true);
      const respose = await fetch(url, options);
      const json = await respose.json();
      console.log(json);
      setTotal(json.total_results);
      const data = json.results;
      setLoading(false);
      console.log(data);
      setSearch(data);
    };
    getData();
  }, [query, page]);

  if(loading) {
    return <Spinner />
  }

  return (
    <div className="container flex flex-col h-full mx-auto items-center ">
      <h2 className="text-2xl">
        Resultados encontrados: <span>{total}</span>
      </h2>
      <div>
        <button onClick={() => setPage((c) => c + 1)}> + </button>
        <button onClick={() => setPage((c) => c - 1)}> - </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 py-24 max-w-5xl ">
        {search &&
          search.map((movie) => (
            <SingleMovie
              key={movie.id}
              url={ movie.poster_path !== null ?  imagePath+ movie.poster_path : NotfoundImage}
              name={movie.original_title}
              vote={movie.vote_count}
              id={movie.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
