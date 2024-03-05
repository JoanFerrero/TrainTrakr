import QRCode from 'react-qr-code';

function QRCodeTrip({trip}) {
  let valor = '';

  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  
  const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

  if(formattedDate < trip.trip.date) {
    valor = 'active'
  } else {
    valor = 'no active'
  }

  return (
    <div>
      <QRCode value={valor} />
    </div>
  );
}

export default QRCodeTrip;