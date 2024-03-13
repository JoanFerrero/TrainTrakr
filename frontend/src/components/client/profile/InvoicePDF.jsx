import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const InvoicePDF = () => {

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      padding: 20,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    text: {
      fontSize: 12,
      marginBottom: 10,
    },
  });

  const invoiceData = {
    customerName: 'John Doe',
    total: '$100',
    // Agrega más datos de la factura según sea necesario
  };

  const data = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Factura</Text>
          <Text style={styles.text}>Nombre del cliente: {invoiceData.customerName}</Text>
          <Text style={styles.text}>Total: {invoiceData.total}</Text>
          {/* Agrega más datos de la factura según sea necesario */}
        </View>
      </Page>
    </Document>
  )

  return (
    <div style={{ width: 0, height: 0, overflow: 'hidden' }}>
      <PDFDownloadLink id="pdf-link" document={data} fileName="factura.pdf">
        {({ loading }) => (loading ? 'Cargando documento...' : null)}
      </PDFDownloadLink>
    </div>
  );
};

export default InvoicePDF;