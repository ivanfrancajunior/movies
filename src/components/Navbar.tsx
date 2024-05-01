import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../assets/images/logo.png";
import { options } from "../utils/utils";
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
    <nav className='navbar flex w-full items-center  justify-between bg-neutral px-10  font-bold shadow-md'>
      <Link
        to={"/"}
        className='flex w-24 min-w-[120px] items-center justify-center'
      >
        <img
          src={logoIcon}
          alt=''
          className='size-10'
        />{" "}
        <span className='ml-2'>FillBerry</span>
      </Link>
      <form
        className='flex  w-full min-w-[500px] items-center justify-center gap-2 p-2'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name=''
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Type to search...'
          className='input input-bordered input-primary relative w-full min-w-[500px] max-w-xs'
        />
      </form>

      {/* <div className=' hidden md:flex md:w-1/6'></div> */}
    </nav>
  );
};
