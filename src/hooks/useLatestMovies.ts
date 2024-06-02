import { useInfiniteQuery } from "@tanstack/react-query";
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

const useLatestMovies = () => {
  const fetchLatestMovies = ({ pageParam = 1 }) =>
    apiClient
      .get<MovieItem>("/movie/now_playing", {
        params: {
          page: pageParam,
          language: "pt-BR",
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery({
    queryKey: ["movie/now_playing"],
    queryFn: fetchLatestMovies,
    keepPreviousData: true,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined,
  });
};

export default useLatestMovies;
