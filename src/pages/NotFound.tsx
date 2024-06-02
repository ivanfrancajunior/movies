import NotFoundImage from "../../public/notfoundimage.gif";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className='flex flex-col items-center justify-center min-h-screen py-20 bg-[#c6c6c6]'>
      <h1 className='text-3xl font-bold'>
        Página não encontrada
      </h1>
      <div className='flex items-center justify-center mr-8 w-3/4 h-3/4 m-auto '>
        <img src={NotFoundImage} alt='not-found' />
      </div>
      <button
        onClick={() => navigate(-1)}
        className='btn btn-sm btn-accent'
      >
        voltar
      </button>
    </section>
  );
};

export default NotFound;
