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
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-globe-americas" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
        </svg>
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