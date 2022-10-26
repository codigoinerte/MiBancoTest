import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Transacciones } from '../interfaces/interfaces';

export const ItemHeader = () => {
  return (
    <View style={styles.row}>
        <View style={styles.colName}>
            <Text style={styles.text}>Cliente</Text>
        </View>
        <View style={styles.colMonto}>
            <Text style={{...styles.text, ...styles.monto }}>Monto</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    colName:{
        flex:1
    },
    colMonto:{
        width:60
    },
    row:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width:'100%',
        marginBottom:15
    },
    text:{
        color:"#000",
        fontSize:18
    },
    monto:{
        textAlign:'right'
    },
    cliente:{
        display:'flex'
    },
    fechaOperacion:{

    }
});