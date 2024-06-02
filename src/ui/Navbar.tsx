import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../assets/icons8-camera-40.png";
export const Navbar = () => {
  const [query, setQuery] = useState("");
  const navegate = useNavigate();
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setQuery("");

    if (query === "") {
      return;
    }
    navegate(`/search/${query}`);
  };
  return (
    <nav className='navbar bg-neutral justify-between'>
      <Link to={"/"} className='btn btn-ghost text-xl'>
        <img src={logoIcon} alt='' className='h-10 w-10' />{" "}
        <span className='ml-2'>FillBerry</span>
      </Link>

      <form
        className='flex  items-center justify-center min-w-[320px] max-w-[500px] gap-2 p-2'
        onSubmit={handleSubmit}
      >
        <label className='input input-bordered flex items-center gap-2'>
          <input
            type='text'
            className='grow'
            placeholder='Search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='w-4 h-4 opacity-70'
          >
            <path
              fillRule='evenodd'
              d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
              clipRule='evenodd'
            />
          </svg>
        </label>
      </form>

      <div className=' hidden md:flex md:w-1/6'></div>
    </nav>
  );
};
