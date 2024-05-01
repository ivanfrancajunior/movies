import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export type MovieItem = {
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
  results: MovieItem[];
  total_pages: number;
  total_results: number;
};
type PostQuery = {
  page?: number;
  total_pages?: number;
  total_results?: number;
};
const useMovies = (query: PostQuery) => {
  const fetchMovies = () =>
    apiClient
      .get("/movie/popular", {
        params: {
          query: query,
          page: query.page,
          total_pages: query.total_pages,
          total_results: query.total_results,
        },
      })
      .then((res) => res.data);

  return useQuery<MovieResponse, Error>({
    queryKey: query ? ["movies", query.page] : ["movies"],
    queryFn: fetchMovies,
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });
};

export default useMovies;
