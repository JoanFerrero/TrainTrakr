import QRCode from 'react-qr-code';

function QRCodeTrip({trip}) {

  return (
    <div>
      <QRCode value={'http://localhost:5173/validation/' + trip.id } />
    </div>
  );
}

export default QRCodeTrip;