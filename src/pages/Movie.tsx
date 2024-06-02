import { useNavigate, useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import { formateDate } from "../utils/dateFormater";
import Spinner from "../ui/Spinner";
import { imagePath } from "../utils/filePath";

const Movie = () => {
  const { id } = useParams();
  const { data, isLoading } = useMovie(id);
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  return (
    <div className='mx-auto h-full min-h-screen '>
      <div
        className=' p-10 bg-cover bg-no-repeat opacity-95 hover:opacity-100 text-[#fb5389] w-full h-full'
        style={{
          backgroundImage: `url(${
            imagePath + data?.backdrop_path
          }`,
        }}
      >
        {data && (
          <div className='flex items-start justify-start min-w-[520px] h-[400px] min-h-[300px] gap-10 '>
            <div className=' shadow-md rounded-md w-[200px] h-[300px] hover:scale-110 transition duration-150'>
              <img
                src={
                  data.poster_path !== null
                    ? imagePath + data.poster_path
                    : ""
                }
                alt={data.original_title}
                className='shadow-md rounded-md '
              />
            </div>
            <div className='flex flex-col items-start justify-start gap-2'>
              <h2 className='text-2xl font-bold'>
                <span className='text-[#fb5389] hover:filter hover:brightness-150'>
                  {" "}
                  {data.original_title}
                </span>{" "}
              </h2>
              <h2 className='font-bold '>
                Duração: {data.runtime} min
              </h2>
              <div className='flex gap-2 font-bold'>
                <h2>Gênero: </h2>{" "}
                {data.genres.map((gen) => (
                  <p className='gap-1 flex' key={gen.id}>
                    <span>{gen.name}</span>
                  </p>
                ))}
              </div>
              <h2 className='font-bold'>
                {" "}
                Lançamento{" "}
                {formateDate(new Date(data.release_date))}
              </h2>
              <h2 className='font-bold'>
                Idioma:{" "}
                <span className='font-bold italic'>
                  {" "}
                  {data.original_language.toLocaleUpperCase()}
                </span>{" "}
              </h2>
            </div>
          </div>
        )}
      </div>
      <div className='mt-5 p-20'>
        <h2 className='text-2xl font-bold text-center my-5'>
          Resumo
        </h2>
        <p className='w-3/4 text-xl mx-auto text-start'>
          {data?.overview
            ? data.overview
            : "No overview avaliable"}
        </p>
        <div className='flex items-center justify-center'>
          <button
            onClick={() => navigate(-1)}
            className='btn btn-accent btn-sm mt-5'
          >
            voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
