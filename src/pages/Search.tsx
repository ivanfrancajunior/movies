import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import MovieItem from "../ui/MovieItem";
import Spinner from "../ui/Spinner";

const Search = () => {
  const { query } = useParams();
  console.log(query);
  const { data, isLoading, error } = useSearch(query!);

  if (isLoading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className='container flex flex-col h-full mx-auto items-center '>
      <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  p-8 gap-2'>
        {data?.results.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
