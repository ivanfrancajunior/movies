import NotFoundImage from "../assets/images/not-found-new.gif";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className='flex   min-h-screen flex-col items-center justify-center py-24'>
      <div className='m-auto flex size-96 flex-col items-center justify-center '>
        <h2 className='my-2 text-2xl'> Perdido? </h2>
        <img
          src={NotFoundImage}
          alt='not-found'
        />
      </div>
      <button
        onClick={() => navigate("/")}
        className='btn btn-primary text-xl shadow-[#e50914] hover:shadow-lg hover:brightness-125'
      >
        bó voltar?
      </button>
    </section>
  );
};

export default NotFound;
