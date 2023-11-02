import { useParams } from "react-router-dom";
import { options } from "../utils";
import { useEffect, useState } from "react";
import { SingleMovie } from "../components/SingleMovie";
import Spinner from "../components/Spinner";
import NotfoundImage from "../../public/no-image-icon-23494.png";
import { imagePath } from "../utils";
import { MovieItem } from "../types/types";
import { ResultsCount } from "../components/ResultsCount";
const Search = () => {
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<MovieItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  console.log(query);

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}?language=pt-BR`;

      setLoading(true);
      const respose = await fetch(url, options);
      const json = await respose.json();
      console.log(json);
      setTotal(json.total_results);
      setTotalPages(json.total_pages);
      const data = json.results;
      setLoading(false);
      console.log(data);
      setSearch(data);
    };
    getData();
  }, [query, page]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container flex flex-col h-full mx-auto items-center ">
      <ResultsCount
        total={total}
        setPage={setPage}
        page={page}
        totalPages={totalPages}
      />
      <div className="flex flex-wrap items-center justify-center gap-5 py-24 max-w-5xl ">
        {search &&
          search.map((movie) => (
            <SingleMovie
              key={movie.id}
              url={
                movie.poster_path !== null
                  ? imagePath + movie.poster_path
                  : NotfoundImage
              }
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
