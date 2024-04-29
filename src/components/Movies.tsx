import useMovies from "../hooks/useMovies";
import CardItem from "./CardItem";
import Spinner from "./Spinner";

const Movies = () => {
  const { data, isLoading } = useMovies();
  if (isLoading) return <Spinner />;
  return (
    <div>
      <h2 className=' mb-8 py-2 text-center text-4xl font-bold'>
        Lista com Lançamentos
      </h2>
      <div className='flex flex-wrap items-start justify-center gap-10'>
        {data?.results.map((movie) => (
          <div>
            <CardItem
              key={movie.id}
              movie={movie}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
