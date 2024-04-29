import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

const useMovies = () => {
  const { data, isLoading, error, isError } = useQuery<MovieResponse>({
    queryKey: ["movies"],
    queryFn: () => apiClient.get("/movie/popular").then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { data, isLoading, error, isError };
};

export default useMovies;
