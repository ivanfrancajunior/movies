interface ItemProps {
  name: string;
  vote: number;
  url: string;
  id: number;
}
import {  RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SvgComponent from "./SvgComponent";

export const SingleMovie = ({ name, vote, url, id }: ItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center max-h-[500px] h-auto w-[185px] rounded-md ">
      <div className="flex flex-wrap w-full h-16  items-center justify-between p-2  rounded-t-md text-white font-bold text-center">
        {name}
      </div>
      <div className="flex bg-[#080808] items-center justify-center w-full">
        <img src={url} alt="" className="w-auto h-auto cover" />
      </div>

      <div className="flex h-10 w-full bg-[#fb5389]  items-center justify-between px-4 rounded-b-md text-white font-bold">
        <div className="flex items-center justify-center gap-1">
        <span>{vote}</span>
        <RiStarFill size={14} color="yellow"/>
        </div>
        <button>
          <Link to={`/movie/${id}`}>
            <SvgComponent/>
          </Link>
        </button>
      </div>
    </div>
  );
};
