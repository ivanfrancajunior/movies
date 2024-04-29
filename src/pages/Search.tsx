import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardItem from "../components/CardItem";
import Spinner from "../components/Spinner";
import { MovieItem } from "../types/types";
import { options } from "../utils/utils";
const Search = () => {
  const { query } = useParams();

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<MovieItem[]>([]);

  console.log(query);

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
      setLoading(true);
      const respose = await fetch(url, options);
      const json = await respose.json();
      const data = json.results;
      setLoading(false);
      setSearch(data);
    };
    getData();
  }, [query]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='container mx-auto flex h-full flex-col items-center '>
      <div className='flex max-w-5xl flex-wrap items-center justify-center gap-5 py-24 '>
        {search &&
          search.map((movie) => (
            <CardItem
              key={movie.id}
              movie={movie}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
