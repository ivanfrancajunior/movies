interface IButtonProps {
  page: number;
  total: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  
}

export const ResultsCount = ({ total, page, setPage, totalPages }: IButtonProps) => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="my-2 flex gap-5 items-center justify-center">
        <button
          onClick={() => setPage((c) => c - 1)}
          className="flex items-center justify-center p-2 h-6 w-6 rounded shadow-md shadow-[#080808] bg-[#fb5389]"
        >
          -
        </button>
        <span>{total} de resultados encontrados </span>
        <button
          onClick={() => setPage((c) => c + 1)}
          className="flex items-center justify-center p-2 h-6 w-6 rounded shadow-md shadow-[#080808] bg-[#fb5389]"
        >
          +
        </button>
      </div>
      <span>
        {" "}
        {page} de {totalPages} páginas{" "}
      </span>
    </div>
  );
};
