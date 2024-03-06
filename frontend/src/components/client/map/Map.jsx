import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useContextHook } from '../../../hooks/useContextHook';
import { StationsContext } from '../../../context/stations/StationsProvider';

const Map = () => {
  const { useChangeFiler } = useContextHook();
  const { StationsState } = useContext(StationsContext);

  const handleClick = (id) => {
    useChangeFiler(id)
  }

  return (
    <div className="relative z-0">
      <MapContainer
        center={[39.46065528327018, -0.38188461978603605]}
        zoom={8}
        style={{ height: '700px', width: '100%' }}
        className='relative'
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
  );
};

export default Map;