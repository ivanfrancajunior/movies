import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SvgComponent from "./SvgComponent";
import { ItemProps } from "../types/types";



export const SingleMovie = ({ name, vote, url, id }: ItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center max-h-[500px] h-auto w-[185px] rounded-md">
      <div className="flex flex-wrap w-full h-24 items-center justify-between  rounded-t-md text-white font-bold text-center">
        {name}
      </div>
      <div className="flex bg-[#080808] items-end justify-center h-[300px] min-h-auto w-full rounded-t-md">
        <img src={url} alt="" className="w-auto h-auto cover" />
      </div>

      <div className="flex h-10 w-full bg-[#fb5389]  items-center justify-between px-4 rounded-b-md text-white font-bold">
        <div className="flex items-center justify-center gap-1">
          <span>{vote}</span>
          <RiStarFill size={14} color="yellow" />
        </div>
        <button>
          <Link to={`/movie/${id}`}>
            <SvgComponent />
          </Link>
        </button>
      </div>
    </div>
  );
};
