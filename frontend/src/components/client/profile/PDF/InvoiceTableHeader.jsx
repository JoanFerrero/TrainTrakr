import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    description: {
        width: '33%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '33%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    rate: {
        width: '33%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
  });

    const InvoiceTableHeader = () => {
        return (
        <View style={styles.container}>
            <Text style={styles.description}>Salida - Llegada</Text>
            <Text style={styles.qty}>Horas</Text>
            <Text style={styles.rate}>Precio</Text>
        </View>
        )

    }
  
  export default InvoiceTableHeader