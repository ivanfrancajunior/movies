import useGenres from "../hooks/useGenre";

const Genres = () => {
  const { data } = useGenres();
  return (
    <div className='min-w-[200px] max-w-md'>
      <h1 className='py-2 text-center text-2xl font-bold'>Categorias</h1>
      <div className=''>
        {data?.genres?.map((genre) => (
          <div
            key={genre.id}
            className='border border-base-200 bg-base-300 p-4'
          >
            <p className='text-center font-bold '>{genre.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
