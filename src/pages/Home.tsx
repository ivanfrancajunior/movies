import Genres from "../components/Genres";
import MoviesList from "../components/MoviesList";

export const Home = () => {
  return (
    <main className='mt-8 flex'>
      <Genres />
      <MoviesList />
    </main>
  );
};
