import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import InvoiceNo from './PDF/InvoiceNo';
import InvoiceItemsTable from './PDF/InvoiceItemsTable';
import InvoiceThankYouMsg from './PDF/InvoiceThankYouMsg';
import BillTo from './PDF/BillTo';
import InvoiceTitle from './PDF/InvoiceTitle';


const InvoicePDF = ({ rent }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    rent.chair.type === 'premium' ? setPrice(30) : null;
    rent.chair.type === 'medio' ? setPrice(20) : null;
    rent.chair.type === 'basico' ? setPrice(10) : null;
  }, [])

  const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  });

  const generateQRDataURL = (url) => {
    return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=100x100`;
  };

  const qrDataURL = generateQRDataURL('http://localhost:5173/validation/' + rent.id );

  const invoiceData = {
    id: "5df3180a09ea16dc4b95f910",
    invoice_no: "201906-28",
    balance: price,
    company: "Train Trakr",
    email: "traintrakr@gmail.com",
    phone: "699 61 33 82",
    address: "Online Web",
    trans_date: rent.trip.date,
    due_date: rent.trip.date,
    items: [
      {
        sno: 1,
        exit: rent.trip.exit_station.name + "-" + rent.trip.arrival_station.name,
        time: rent.trip.time,
        price: price,
      },
    ],
  };

  const data = (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceTitle title='Train Trakr'/>
        <InvoiceNo invoice={invoiceData}/>
        <BillTo invoice={invoiceData}/>
        <InvoiceItemsTable invoice={invoiceData} />
        <InvoiceThankYouMsg />
        <View style={styles.qrCode}>
          <Image src={qrDataURL} style={{ width: 100, height: 100 }} />
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