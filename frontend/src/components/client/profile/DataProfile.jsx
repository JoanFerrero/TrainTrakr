const DataProfile = ({profile}) => {

  const initial = profile.username.charAt(0);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mr-4 flex items-center justify-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center border border-green-500 mb-2 mr-4">
              <span className="text-xl text-black font-semibold">{initial}</span>
            </div>
            <h2 className="text-xl text-black font-semibold mb-2 text-center lg:text-left">{profile.username}</h2>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <p className="mt-2 font-semibold text-black text-2xl text-center">{profile.email}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DataProfile;