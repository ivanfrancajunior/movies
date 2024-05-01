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
  const fetchGenres = () =>
    apiClient.get("/genre/movie/list").then((res) => res.data);
  return useQuery<GenresResponse>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

export default useGenres;
