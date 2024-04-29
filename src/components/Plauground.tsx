import useGenres from "../hooks/useGenre";

const Plauground = () => {
  const { data } = useGenres();
  console.log(data);
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        
          <button className='btn btn-primary'>Get Started</button>
      </div>
    </div>
  );
};

export default Plauground;
