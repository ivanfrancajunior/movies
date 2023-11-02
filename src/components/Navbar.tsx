import { useState } from "react";
import { options } from "../utils";
import { useNavigate } from "react-router-dom";
import { RiMenuLine, RiSearchLine } from "react-icons/ri";
import logoIcon from "../assets/icons8-camera-40.png";
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
    <nav className="bg-[#080808] h-24 px-20  flex items-center justify-between gap-20  text-[#d8d8d8] font-bold  w-full">
      <h1 className="min-w-24  flex items-center justify-center">
        <img src={logoIcon} alt="" className="h-10 w-10"/>
      </h1>
      <form
        className="hidden md:flex  items-center justify-center max-w-[600px] gap-2 p-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="    md:w-[5580px] py-2 px-4 rounded-lg "
        />
        <button type="submit">
          <RiSearchLine size={24} />
        </button>
      </form>
      <div className="md:hidden w-1/6">
        <RiMenuLine size={24} />
      </div>
      <div className=" hidden md:flex md:w-1/6"></div>
    </nav>
  );
};
