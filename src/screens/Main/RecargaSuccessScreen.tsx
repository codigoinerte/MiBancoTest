import React from 'react'
import moment from 'moment';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, Image, StyleSheet, Text } from 'react-native';
import { ContainerScreens } from '../../components';
import { Button } from 'react-native-paper';
require('moment/locale/es');

interface Props extends DrawerScreenProps<any, any>{};

export const RecargaSuccessScreen = ({ navigation, route }: Props) => {
  
    const params = route.params;
    const hoy = moment().format('D MMMM YYYY, h:mm a');
    moment.locale('es');
  return (
    <>
    <View style={{ flex:1, backgroundColor:'#f4f4f4'}}>
    <ContainerScreens>
    
    <View style={{display:'flex', justifyContent:'center',alignItems:'center', marginVertical:20}}>
        <Image
            source={require('../../assets/gif.gif')}
            style={{width:300, height:200}}
            resizeMode="contain"
            
        />

        

        <View style={styles.recipe}>
          <Text style={{fontSize:20, color:'#6a6a6a', fontWeight:'700'}}>Tu recarga fue exitosa</Text>
          <Text style={{fontSize:65, color:'#f78000', fontWeight:'700', marginVertical:15}}>S/ {params?.monto}</Text>
          <Text style={{fontSize:15, color:'#6a6a6a', fontWeight:'700', marginBottom:10}}>Usuario de prueba</Text>
          <Text style={{fontSize:20, color:'#000', fontWeight:'700', marginBottom:10}}>{hoy}</Text>
          <Text style={{fontSize:20, color:'#000', fontWeight:'700', marginBottom:10}}>Operación: {params?.operacion}</Text>

          {
            params?.nota &&
            (
              <View style={{borderTopColor:'#f4f4f4',borderTopWidth:1,display:'flex',width:'100%',}}>

                <Text style={{fontSize:15, color:'#000', fontWeight:'500', marginBottom:10}}>{params?.nota}</Text>

              </View>
            )
          }
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
        alignItems:'center',
        
    }
});
