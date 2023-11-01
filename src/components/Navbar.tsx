import { useState } from "react";
import { options } from "../utils";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [query, setQuery] = useState("");
  const navegate = useNavigate();

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}`,
      options
    );
    const json = await response.json();

    console.log(json);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery("");

    if (query === "") {
      return;
    }

    getData();
    navegate(`/search/${query}`);
  };
  return (
    <nav className="bg-[#080808] h-24 p-4 flex items-center justify-start gap-20 text-[#d8d8d8] font-bold">
      <h1>Logo muito elegante </h1>
      <form
        action=""
        className="flex items-center justify-between gap-5 ml-20"
        onSubmit={handleSubmit}
        placeholder="Search"
      >
        <input
          type="text"
          name=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button type="submit" className="border">
          Search
        </button>
      </form>
    </nav>
  );
};
