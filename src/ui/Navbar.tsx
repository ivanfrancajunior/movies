import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../assets/icons8-camera-40.png";
export const Navbar = () => {
  const [query, setQuery] = useState("");
  const navegate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery("");

    if (query === "") {
      return;
    }
    navegate(`/search/${query}`);
  };
  return (
    <nav className="bg-[#080808] h-24 px-10  flex items-center justify-between  text-[#d8d8d8] font-bold  w-full">
      <Link to={"/"} className="w-24  flex items-center justify-center min-w-[120px]">
        <img src={logoIcon} alt="" className="h-10 w-10" /> <span className="ml-2">FillBerry</span>
      </Link>
      <form
        className="flex  items-center justify-center min-w-[320px] max-w-[500px] gap-2 p-2"
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

      <div className=" hidden md:flex md:w-1/6"></div>
    </nav>
  );
};
