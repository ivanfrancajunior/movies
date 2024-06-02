import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

export type Movie = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  genre_ids: number[];
};

export type MovieItem = {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
};

const useSearch = (query: string) => {
  const fetchLatestMovies = () =>
    apiClient
      .get<MovieItem>("search/movie", {
        params: {
          language: ["pt-BR", "en-US"],
          query,
        },
      })
      .then((res) => res.data);

  return useQuery({
    queryKey: ["movie/search/", query],
    queryFn: fetchLatestMovies,
  });
};

export default useSearch;
