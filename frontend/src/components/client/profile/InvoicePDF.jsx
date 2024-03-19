import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const InvoicePDF = ({ rent }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    rent.chair.type === 'premium' ? setPrice(30) : null;
    rent.chair.type === 'medio' ? setPrice(20) : null;
    rent.chair.type === 'basico' ? setPrice(10) : null;
  }, [])

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    header: {
      fontSize: 24,
      marginBottom: 20,
    },
    subheader: {
      fontSize: 18,
      marginBottom: 10,
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
    },
    qrCode: {
      alignSelf: 'center',
      marginTop: 20,
    },
  });

  const generateQRDataURL = (url) => {
    return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=100x100`;
  };

  const qrDataURL = generateQRDataURL('http://localhost:5173/validation/' + rent.id );

  const data = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Train Trakr - Factura de Viaje - {rent.train.name}</Text>
          <Text style={styles.subheader}>Detalles del Viaje:</Text>
          <Text style={styles.text}>Origen: {rent.trip.exit_station.name}</Text>
          <Text style={styles.text}>Destino: {rent.trip.arrival_station.name}</Text>
          <Text style={styles.text}>Fecha: {rent.trip.date}</Text>
          <Text style={styles.text}>Precio: {price}</Text>
          <View style={styles.qrCode}>
            <Image src={qrDataURL} style={{ width: 100, height: 100 }} />
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div style={{ width: 0, height: 0, overflow: 'hidden' }}>
      <PDFDownloadLink id="pdf-link" document={data} fileName="factura.pdf">
        {({ loading }) => (loading ? 'Cargando documento...' : null)}
      </PDFDownloadLink>
    </div>
  );
};

export default InvoicePDF;