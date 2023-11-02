import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils";

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface Genre {
  id: number;
  name: string;
}
export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}
export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface MovieItem {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState<MovieItem>();
  const imagePath = "https://image.tmdb.org/t/p/w500";

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
                src={imagePath + data.poster_path}
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
              <h2 className="font-bold"> Lançamento {data.id}</h2>
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
        <p className="w-3/4 text-2xl mx-auto text-center">{data?.overview}</p>
        <div className="flex items-center justify-center">
          <button className="text-2xl mx-auto text-center mt-20 w-[126px] h-10 rounded-2xl bg-[#fb5389] hover:filter hover:brightness-125 hover:shadow-lg shadow-[#e50914]">
            voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
