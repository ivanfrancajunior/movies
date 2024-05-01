import useGenres from "../hooks/useGenre";
import Movie from "../pages/Movie";

const Plauground = () => {
  const { data } = useGenres();
  console.log(data);
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <Movie />
        <button className='btn btn-primary'>Get Started</button>
      </div>
    </div>
  );
};

export default Plauground;
