import React from 'react'
import { ActivityIndicator, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'

interface Props{
  style?: StyleProp<ViewStyle>
}

export const Loader = ({style = {}}:Props) => {
  return (
   
    <View style={[styles.container, style ]}>
        <ActivityIndicator 
            size={50}
            color={"#0093d3"}
        />
    </View>

  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      backgroundColor:'#FFFFFF',
      width:"100%",
      height:"100%"
    }
});