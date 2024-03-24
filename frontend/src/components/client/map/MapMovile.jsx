import { useState, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { StationsContext } from '../../../context/stations/StationsProvider';
import { useContextHook } from "../../../hooks/useContextHook";
const MapMovile = () => {
  const { useChangeFiler } = useContextHook();
  const [mostrarRecuadro, setMostrarRecuadro] = useState(false);
  const { StationsState } = useContext(StationsContext);

  const handleClick = (id) => {
    useChangeFiler(id)
  }

  return (
    <>
      <button
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md mb-10"
        onClick={() => setMostrarRecuadro(!mostrarRecuadro)}
      >
        M
      </button>
      {mostrarRecuadro && (
        <div className="fixed top-1/2 left-1/2 w-[20rem] h-[26rem] transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded-lg z-50 p-3 mt-4">
          <MapContainer center={[39.46065528327018, -0.38188461978603605]} zoom={7} style={{ width: '100%', height: '380px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {StationsState.stations.map((station, index) => (
              <Marker position={[station.latitud, station.longitud]} key={index} eventHandlers={{ click: () => handleClick(station.id) }}>
                <Popup >
                  {station.name}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </>
  )
}

export default MapMovile;