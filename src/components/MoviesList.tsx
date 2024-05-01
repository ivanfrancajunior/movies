import { useState } from "react";
import useMovies from "../hooks/useMovies";
import CardItem from "./CardItem";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const MoviesList = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useMovies({
    page,
  });

  const navigate = useNavigate();

  function handleSearch(id: number) {
    navigate(`/movie/${id}`);
    console.log(id);
  }
  if (isLoading) return <Spinner />;
  return (
    <div className='flex h-screen w-full flex-col'>
      <h2 className=' mb-8 ml-8 py-2 text-center text-4xl font-bold'>
        Lista com Lançamentos
      </h2>
      {error && <p className='text-center text-error'>{error.message}</p>}
      <div className='flex flex-wrap items-start justify-center gap-10'>
        {!error &&
          data?.results.map((movie) => (
            <div key={movie.id}>
              <CardItem
                movie={movie}
                handleClick={() => handleSearch(movie.id)}
              />
            </div>
          ))}
      </div>
      <div className='fixed bottom-10 right-5'>
        <button
          className='btn btn-primary'
          onClick={() => setPage(page - 1)}
        >
          {page === 1 ? 1 : page}
        </button>
        <button
          className='btn btn-primary'
          onClick={() => setPage(page + 1)}
        >
          {page + 1}
        </button>
      </div>
    </div>
  );
};

export default MoviesList;
