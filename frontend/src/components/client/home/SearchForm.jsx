const SearchForm = () => {
  return (
    <>
      {/* <div className="bg-white w-full md:h-30 flex items-center justify-center rounded-lg">
        <div className="lg:flex lg:p-5 md:flex md:p-5 sm:flex sm:p-5">
          <div className="flex items-center border rounded-md  mr-4">
            <label htmlFor="origen" className="mr-2 ml-3">Desde:</label>
            <input type="text" id="origen" placeholder="Origen" className="w-full p-4 focus:outline-none rounded-lg" style={{border: 'none'}} />
          </div>
          <div className="flex items-center border rounded-md mr-4">
            <label htmlFor="destino" className="mr-2 ml-3">Hasta:</label>
            <input type="text" id="destino" placeholder="Destino" className="w-full p-4 focus:outline-none rounded-lg" style={{border: 'none'}} />
          </div>
          <button className="bg-blue-500 text-white px-4 py-4 rounded-md hover:bg-blue-600 focus:outline-none mt-4">
          Buscar
          </button>
        </div>
      </div> */}
    <div className="bg-white w-full h-52 flex flex-col items-center justify-center rounded-lg">
      <div className="flex flex-col w-2/3">
        <div className="flex items-center border-b border-gray-300">
          <label htmlFor="origen" className="mr-2">Desde:</label>
          <input type="text" id="origen" placeholder="Estación de origen" className="flex-1 p-2 focus:outline-none" style={{border: 'none'}} />
        </div>
        <div className="flex items-center border-b border-gray-300">
          <label htmlFor="destino" className="mr-2">Hasta:</label>
          <input type="text" id="destino" placeholder="Estación de destino" className="flex-1 p-2 focus:outline-none" style={{border: 'none'}} />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none mt-4">
          Buscar
        </button>
      </div>
    </div>
    </>
  );
}

export default SearchForm;