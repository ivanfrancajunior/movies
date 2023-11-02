export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
     Authorization: `Bearer ${import.meta.env.TMDB_KEY}`,
  },
};


export const imagePath = "https://image.tmdb.org/t/p/w500";