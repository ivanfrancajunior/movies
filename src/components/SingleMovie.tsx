interface ItemProps {
  name: string;
  vote: number;
  url: string;
}

export const SingleMovie = ({ name, vote, url }: ItemProps) => {
  return (
    <div className="flex flex-col items-center justify-between max-h-[500px] h-auto w-[185px] rounded-md bg-orange-500">
      <div className="flex flex-wrap w-full bg-purple-500  items-center justify-between p-2  rounded-t-md">
        {name}
      </div>
      <div className="flex ">
        <img src={url} alt="" className="w-auto h-auto" />
      </div>

      <div className="flex h-[14%] w-full bg-purple-500  items-center justify-between p-2 rounded-b-md text-[##ebebe]">
        <span>{vote}</span>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M4 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S5.5 9.83 5.5 9 4.83 7.5 4 7.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
