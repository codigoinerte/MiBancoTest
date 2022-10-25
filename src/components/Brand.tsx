import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { PropsBrand } from '../interfaces/interfaces'


export const Brand = ({ style={}, styleImagen={} }: PropsBrand) => {

    
  return (
    <View style={{...stylesBrand.container, ...style as any}}>
        <Image
            source={require('../assets/splash.png')}
            resizeMode="contain"
            style={{...stylesBrand.image, ...styleImagen as any}}
        />
    </View>
  )
}

const stylesBrand = StyleSheet.create({
    container:{
        width:"100%",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",        
        textAlign:"center"
    },
    image:{
        width: 250,
        height: 250,
        marginHorizontal:"auto",
        marginVertical:"auto"
    }
});