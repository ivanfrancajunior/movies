import { useParams } from "react-router-dom";
import { options } from "../utils";
import { useEffect, useState } from "react";

type genre = {
  id: number;
  name: string;
};
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
  genres: genre[];
}

const Search = () => {
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState<MovieItem[]>([]);
  console.log(query);

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`;
      const respose = await fetch(url, options);
      const json = await respose.json();
      console.log(json);
      setTotal(json.total_results);
      const data = json.results;
      console.log(data);
      setSearch(data);
    };
    getData();
  }, [query, page]);

  return (
    <div className="container mx-auto p-10">
      resultados encontrados = {total}
      <div>
        <button onClick={() => setPage((c) => c + 1)}> + </button>
        <button onClick={() => setPage((c) => c - 1)}> - </button>
      </div>
      <div>
        {search &&
          search.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.original_title}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
