import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { options } from "../utils";
import { MovieItem } from "../types/types";
import NotfoundImage from "../../public/no-image-icon-23494.png";

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState<MovieItem>();
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}`;
      const respose = await fetch(url, options);
      const json = await respose.json();
      console.log(json);

      setData(json);
    };
    getData();
  }, [id]);

  return (
    <div className="mx-auto h-full min-h-screen ">
      <div
        className=" p-10 bg-cover bg-no-repeat opacity-90 hover:opacity-100 text-zinc-100 w-full h-full"
        style={{
          backgroundImage: `url(${imagePath + data?.backdrop_path}`,
        }}
      >
        {data && (
          <div className="flex items-start justify-start min-w-[520px] h-[400px] min-h-[300px] gap-10 ">
            <div className=" shadow-md rounded-md w-[200px] h-[300px] hover:scale-110 transition duration-150">
              <img
                src={
                  data.poster_path !== null
                    ? imagePath + data.poster_path
                    : NotfoundImage
                }
                alt={data.original_title}
                className="shadow-md rounded-md "
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="text-2xl font-bold">
                <span className="text-[#fb5389] hover:filter hover:brightness-150">
                  {" "}
                  {data.original_title}
                </span>{" "}
              </h2>
              <h2 className="font-bold ">Duração: {data.runtime} min</h2>
              <div className="flex gap-2 font-bold">
                <h2>Gênero: </h2>{" "}
                {data.genres.map((gen) => (
                  <p className="gap-1 flex" key={gen.id}>
                    <span>{gen.name}</span>
                  </p>
                ))}
              </div>
              <h2 className="font-bold">
                {" "}
                Lançamento {data.release_date.replace(/-/g, "/")}
              </h2>
              <h2 className="font-bold">
                Idioma:{" "}
                <span className="font-bold italic">
                  {" "}
                  {data.original_language.toLocaleUpperCase()}
                </span>{" "}
              </h2>
            </div>
          </div>
        )}
      </div>
      <div className="mt-5 p-20">
        <h2 className="text-3xl font-bold text-center my-5">About the movie</h2>
        <p className="w-3/4 text-2xl mx-auto text-center">
          {data?.overview ? data.overview : "No overview avaliable 😒"}
        </p>
        <div className="flex items-center justify-center">
          <button onClick={() => navigate(-1)} className="text-2xl flex items-center justify-center text-center mt-20 w-[126px] h-10 rounded-2xl bg-[#fb5389] hover:filter hover:brightness-125 hover:shadow-lg shadow-[#e50914]">
            voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
