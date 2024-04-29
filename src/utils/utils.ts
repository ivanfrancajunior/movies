const bearer = import.meta.env.VITE_TMDB_AUTH_BEARER;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${bearer}`,
  },
};

export const imagePath = "https://image.tmdb.org/t/p/w500";
