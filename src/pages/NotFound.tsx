import NotFoundImage from "../../public/20602754_6333072.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20">
      <div className="flex items-center justify-center w-3/4 h-3/4 m-auto ">
        <img src={NotFoundImage} alt="not-found" />
      </div>
      <button onClick={() => navigate(-1)} className="text-2xl flex items-center justify-center text-center mt-20 w-[126px] h-10 rounded-2xl bg-[#fb5389] hover:filter hover:brightness-125 hover:shadow-lg shadow-[#e50914]">
            voltar
          </button>
    </section>
  );
};

export default NotFound;
