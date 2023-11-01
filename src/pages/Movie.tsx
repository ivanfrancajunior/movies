import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils";
type genre = {
  id: number;
  name: string;
};
interface MovieItem {
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
  realised_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  genres: genre[];
}
const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState<MovieItem>();

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}`;
      const respose = await fetch(url, options);
      const json = await respose.json();
      console.log(json);

      setData(json);
    };
    getData();
  }, []);

  return (
    <div>
      {data && (
        <>
          <h2>nome {data.original_title}</h2>
          <h2>bg {data.id}</h2>
          <h2>
            gen{" "}
            {data.genres.map((gen) => (
              <span key={gen.id}>{gen.name}</span>
            ))}
          </h2>
          <h2> language {data.id}</h2>
          <h2>realese {data.id}</h2>
          <h2>revenue {data.id}</h2>
          <h2>runtime {data.id}</h2>
          <h2>tagline {data.id}</h2>
          <h2>overview{data.id}</h2>
        </>
      )}
    </div>
  );
};

export default Movie;
