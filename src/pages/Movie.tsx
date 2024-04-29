import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { options } from "../utils/utils";
import { MovieItem } from "../types/types";
import NotfoundImage from "../assets/images/no-image-icon-23494.png";
import { imagePath } from "../utils/utils";

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState<MovieItem>();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`;
      const respose = await fetch(url, options);
      const json = await respose.json();
      console.log(json);

      setData(json);
    };
    getData();
  }, [id]);

  return (
    <div className='mx-auto h-full min-h-screen '>
      <div
        className=' size-full bg-cover bg-no-repeat p-10 text-[#fb5389] opacity-80 hover:opacity-100'
        style={{
          backgroundImage: `url(${imagePath + data?.backdrop_path}`,
        }}
      >
        {data && (
          <div className='flex h-[400px] min-h-[300px] min-w-[520px] items-start justify-start gap-10 '>
            <div className=' h-[300px] w-[200px] rounded-md shadow-md transition duration-150 hover:scale-110'>
              <img
                src={
                  data.poster_path !== null
                    ? imagePath + data.poster_path
                    : NotfoundImage
                }
                alt={data.original_title}
                className='rounded-md shadow-md '
              />
            </div>
            <div className='flex flex-col items-start justify-start gap-2'>
              <h2 className='text-2xl font-bold'>
                <span className='text-[#fb5389] hover:brightness-150'>
                  {" "}
                  {data.original_title}
                </span>{" "}
              </h2>
              <h2 className='font-bold '>Duração: {data.runtime} min</h2>
              <div className='flex gap-2 font-bold'>
                <h2>Gênero: </h2>{" "}
                {data.genres.map((gen) => (
                  <p
                    className='flex gap-1'
                    key={gen.id}
                  >
                    <span>{gen.name}</span>
                  </p>
                ))}
              </div>
              <h2 className='font-bold'>
                {" "}
                Lançamento {data.release_date.replace(/-/g, "/")}
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
        <h2 className='my-5 text-center text-2xl font-bold'>Resumo</h2>
        <p className='mx-auto w-3/4 text-start text-xl'>
          {data?.overview ? data.overview : "No overview avaliable 😒"}
        </p>
        <div className='flex items-center justify-center'>
          <button
            onClick={() => navigate(-1)}
            className='mt-20 flex h-10 w-[126px] items-center justify-center rounded-2xl bg-[#fb5389] text-center text-2xl shadow-[#e50914] hover:shadow-lg hover:brightness-125'
          >
            voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
