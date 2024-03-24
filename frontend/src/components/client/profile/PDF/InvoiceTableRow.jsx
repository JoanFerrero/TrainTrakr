import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
      width: '33%',
      textAlign: 'left',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      paddingLeft: 8,
    },
    qty: {
      width: '33%',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      textAlign: 'right',
      paddingRight: 8,
    },
    rate: {
      width: '33%',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      textAlign: 'right',
      paddingRight: 8,
    },
  });


const InvoiceTableRow = ({items}) => {
    return (
      <Fragment>
        <View style={styles.row}>
          <Text style={styles.description}>{items[0].exit}</Text>
          <Text style={styles.qty}>{items[0].time}</Text>
          <Text style={styles.rate}>{items[0].price}</Text>
        </View>
      </Fragment> 
    )
};
  
export default InvoiceTableRow