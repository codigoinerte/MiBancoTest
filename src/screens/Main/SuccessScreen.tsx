import React, {useEffect} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button } from 'react-native-paper';

import { Brand, ContainerScreens } from '../../components';
import { PropsMenu } from '../../interfaces/interfaces';

interface Props extends DrawerScreenProps<any, any>{};

export const SuccessScreen = ({ navigation, route }: PropsMenu) => {

    const params = route.params;


  return (
    <>
    <ContainerScreens>

    <View style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Image
            source={require('../../assets/success.png')}
            style={{width:300, height:250}}
            resizeMode="contain"
            
        />
        <Text style={{fontSize:30, color:'#000', fontWeight:'700'}}>{params?.mensaje}</Text>
        <Text style={{fontSize:20, color:'#000', fontWeight:'700', marginVertical:15}}>Operación: {params?.operacion}</Text>

    
    </View>
       

        <Button 
        style={{backgroundColor:"#00953a", marginBottom:40}}
        labelStyle={{fontSize:16,color:"#FFF"}}
        uppercase={false} 
        mode="contained" 
        onPress={()=>navigation.navigate('ListScreen') }>Ir al inicio</Button>

    </ContainerScreens>                
</>
  )
}
