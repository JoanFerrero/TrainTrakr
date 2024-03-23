import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();

  const navigateToTrip = () => {
    navigate('/trips')
  }

  return (
    <>
      <div className="bg-white w-full lg:h-96  flex flex-col lg:flex-row content-center rounded-lg overflow-hidden">
        <div className="lg:w-1/2 h-full hidden lg:block">
          <img
            src="https://media.istockphoto.com/id/1181249621/es/foto/el-tren-de-pasajeros-el%C3%A9ctrico-conduce-a-alta-velocidad-entre-el-paisaje-urbano.jpg?s=612x612&w=0&k=20&c=_AzHK-F82oA06ua1wjTC4NfoI076OKTBH4rYcP17YC4="
            alt="Imagen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">Descubre aventuras con Train Trakr. ¡Empieza ahora!</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigateToTrip()}>Buscar viajes</button>
        </div>
      </div>
    </>
  );
}

export default SearchForm;