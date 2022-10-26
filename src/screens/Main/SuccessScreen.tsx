import React, {useEffect} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button } from 'react-native-paper';

import { Brand, ContainerScreens } from '../../components';
import { PropsMenu } from '../../interfaces/interfaces';
import moment from 'moment';
require('moment/locale/es');

interface Props extends DrawerScreenProps<any, any>{};

export const SuccessScreen = ({ navigation, route }: PropsMenu) => {

    const params = route.params;
    const hoy = moment().format('D MMMM YYYY, h:mm a');
    moment.locale('es');
  return (
    <>
    <View style={{ flex:1, backgroundColor:'#f4f4f4'}}>
    <ContainerScreens>
    
    <View style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Image
            source={require('../../assets/success.png')}
            style={{width:300, height:200}}
            resizeMode="contain"
            
        />

        <View style={styles.recipe}>
          <Text style={{fontSize:20, color:'#6a6a6a', fontWeight:'700'}}>{params?.mensaje}</Text>
          <Text style={{fontSize:65, color:'#f78000', fontWeight:'700', marginVertical:15}}>S/ {params?.monto}</Text>
          <Text style={{fontSize:15, color:'#6a6a6a', fontWeight:'700', marginBottom:10}}>Usuario de prueba</Text>
          <Text style={{fontSize:20, color:'#000', fontWeight:'700', marginBottom:10}}>{hoy}</Text>
          <Text style={{fontSize:20, color:'#000', fontWeight:'700', marginBottom:10}}>Operación: {params?.operacion}</Text>
        </View>
    
    </View>
       

        <Button 
        style={{backgroundColor:"#00953a", marginBottom:40}}
        labelStyle={{fontSize:16,color:"#FFF"}}
        uppercase={false} 
        mode="contained" 
        onPress={()=>navigation.navigate('ListScreen') }>Ir al inicio</Button>
    </ContainerScreens>                
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    recipe:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor:'#FFF', 
        paddingHorizontal:30, 
        paddingVertical:20, 
        marginBottom:10,
        justifyContent:'center',
        display:'flex',
        alignItems:'center'
    }
});
