import useLatestMovies from "../hooks/useLatestMovies";
import MovieItem from "../ui/MovieItem";
import InfinitScroll from "react-infinite-scroll-component";
import Spinner from "../ui/Spinner";
export const Latest = () => {
  const { data, fetchNextPage, hasNextPage } =
    useLatestMovies();
  console.log(data);
  const fetchMoreGamesCount =
    data?.pages?.reduce((page) => page + 1, 0) || 0;
  return (
    <InfinitScroll
      loader={<Spinner />}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      dataLength={fetchMoreGamesCount}
    >
      <div className=' flex flex-col h-full '>
        <h2 className='text-4xl font-bold mt-10 text-center'>
          Get a list of movies that are currently in
          theatres
        </h2>
        <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  p-8 gap-2'>
          {data?.pages.map((page) =>
            page.results.map((movie) => {
              return (
                <div key={movie.id}>
                  <MovieItem key={movie.id} movie={movie} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </InfinitScroll>
  );
};
