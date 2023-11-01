export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:`Bearer ${import.meta.env.TMDB_KEY}`,
  },
};

