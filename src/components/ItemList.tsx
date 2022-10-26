import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Transacciones } from '../interfaces/interfaces';
import moment from 'moment';
require('moment/locale/es');

export const ItemList = ({ cliente='', fechaoperacion='', monto='' }: Transacciones) => {

    moment.locale('es');

    const fecha = moment(fechaoperacion, "YYYYMMDD").fromNow(); ///moment(fechaoperacion).format("D [de] MMMM [del] YYYY [a las] h:mm:ss a");
  return (
    <View style={styles.row}>
        <View style={styles.colName}>
            <Text style={styles.text}>{cliente}</Text>
            <Text style={{...styles.text, color:'#909090', fontSize:15}}>{fecha}</Text>
        </View>
        <View style={styles.colMonto}>
            <Text style={{...styles.text, ...styles.monto, color:(parseFloat(monto) < 0) ? 'red':'#000'  }}>S/ {monto}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    colName:{
        flex:1
    },
    colMonto:{
        width:80
    },
    row:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width:'100%'
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