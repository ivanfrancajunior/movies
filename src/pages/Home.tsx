import Genres from "../components/Genres";
import Movies from "../components/Movies";

export const Home = () => {
  return (
    <main className='mt-8 flex'>
      <Genres />
      <Movies />
    </main>
  );
};
