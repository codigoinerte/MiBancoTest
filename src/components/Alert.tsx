import React from 'react'
import { ColorValue, StyleSheet, Text, View  } from 'react-native';
import { PropsAlert } from '../interfaces/interfaces';

export const Alert = ({ type, message, style, styleText={} }: PropsAlert) => {

  let background: ColorValue | undefined ;

   if(type == 'success')
   {
        background = "#dff0d8";
   }
   else if(type == 'info')
   {
        background = "#31708f";
   }
   else if(type == 'warning')
   {
        background = "#fff4b9";
   }
   else if(type == 'danger')
   {
        background = '#f2dede';
   }

  return (
    <>
        <View style={[{...styles.alertContainer, backgroundColor: background}, style]}>            
            <Text style={{ color:'#000', ...styleText as any}}>{message}</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    alertContainer:{
        width:'100%',
        padding:10,
        display:'flex',        
        borderRadius:4,        
        marginBottom:15
        
    },
    alertText:{
        color:'#000',
        fontSize:13,
    },
    alertWarning:{
        backgroundColor:'#fff4b9'        
    },
    alertSuccess:{
        backgroundColor:'#dff0d8'
    },
    alertInfo:{
        backgroundColor:'#31708f',
    },
    alertDanger:{
        backgroundColor:'#f2dede',
    }


});
