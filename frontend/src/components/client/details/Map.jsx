import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({trip}) => {
  return (
    <>
      <div className="relative z-0 m-10">
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
          <Marker position={[trip.arrival_station.latitud, trip.arrival_station.longitud]}>
            <Popup >
              {trip.arrival_station.name}
            </Popup>
          </Marker>
          <Marker position={[trip.exit_station.latitud, trip.exit_station.longitud]}>
            <Popup >
              {trip.exit_station.name}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default Map;