import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export type Genre = {
  id: number;
  name: string;
};

type GenresResponse = {
  genres: Genre[];
};

const useGenres = () => {
  const { data, isLoading, error, isError } = useQuery<GenresResponse>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genre/movie/list").then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { data, isLoading, error, isError };
};

export default useGenres;
