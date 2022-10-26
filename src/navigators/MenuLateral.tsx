import React, { useRef, useState } from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { useWindowDimensions, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { appTheme as styles } from '../styles/appTheme';
import { ListScreen } from '../screens/Main/ListScreen';
import { Brand, HeaderMenu } from '../components';
import { TransferScreen } from '../screens/Main/TransferScreen';
import { SuccessScreen } from '../screens/Main/SuccessScreen';
import { ScanScreen } from '../screens/Main/ScanScreen';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { QrScreen } from '../screens/Main/QrScreen';
import { RecargaScreen } from '../screens/Main/RecargaScreen';
import { RecargaSuccessScreen } from '../screens/Main/RecargaSuccessScreen';

export type DrawerStackParams = {    
  ListScreen: undefined,
  TransferScreen: undefined,
  RecargaScreen:undefined,
  RecargaSuccessScreen:{
    mensaje: string,
    operacion: string,
    monto:string
  },
  SuccessScreen: {
    mensaje: string,
    operacion: string,
    monto:string
  },
  ScanScreen: undefined,
}

const Drawer = createDrawerNavigator<DrawerStackParams>();
 
export const MenuLateral = () =>  {

  const { width } = useWindowDimensions();
 
  return (
     
    <Drawer.Navigator
     screenOptions={
       {
         drawerType: width >= 700 ? 'permanent' : 'front',
          
       }
        
     } 
      
     drawerContent={ (props) => <MenuInterno {...props} /> }
    >      
      <Drawer.Screen name="ListScreen" options={{headerShown: true, header: ()=> <HeaderMenu  /> }} component={ListScreen}  />      
      <Drawer.Screen name="TransferScreen" options={{headerShown: true, header: ()=> <HeaderMenu  /> }} component={TransferScreen}  />      
      <Drawer.Screen name="SuccessScreen" options={{headerShown: true, header: ()=> <HeaderMenu  /> }} component={SuccessScreen}  />      
      <Drawer.Screen name="RecargaSuccessScreen" options={{headerShown: true, header: ()=> <HeaderMenu  /> }} component={RecargaSuccessScreen}  />      
      <Drawer.Screen name="RecargaScreen" options={{headerShown: true, header: ()=> <HeaderMenu  /> }} component={RecargaScreen}  />      
      <Drawer.Screen name="ScanScreen" options={{headerShown: false }} component={ScanScreen}  />      
    </Drawer.Navigator>
  );
}
 
const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

  const { logout } = useContext(AuthContext);

  const [widthView, setWidthView] = useState(0)

  return (
 
      <>
        <DrawerContentScrollView style={{flex:1}} contentContainerStyle={{ flex: 1 }}>
          {/* parte del avatar */}
          
          <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> navigation.navigate('ListScreen') }>
              <View style={ styles.avatarContainer }
              onLayout={(event) => {
                const {x, y, width, height} = event.nativeEvent.layout;
                setWidthView(width-30);
              }}
              >
                <Brand />
              </View>
          </TouchableOpacity>

          {/* opciones de menu */}
          <View style={ {...styles.menuContainer,} }>
 
            <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> navigation.navigate('TransferScreen') }>
              <Text style={ styles.menuTexto }><Icon name="send-outline" size={20} color="#444444" /> Transferencia</Text>
            </TouchableOpacity>
          
            <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> navigation.navigate('RecargaScreen') }>
              <Text style={ styles.menuTexto }><Icon name="send-outline" size={20} color="#444444" /> Recarga celular</Text>
            </TouchableOpacity>
           
            <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> navigation.navigate('ScanScreen') }>
              <Text style={ styles.menuTexto }><Icon name="send-outline" size={20} color="#444444" /> Galeria</Text>
            </TouchableOpacity>
              
          </View>

          <View style={{flex:1, height:'100%'}}>

              </View>
            <TouchableOpacity
            style={{...styles.menuBoton, backgroundColor:'#f2f2f2', borderRadius:0, marginBottom:0, height:60, display:'flex', justifyContent:'center', borderTopColor:'#eee',borderTopWidth:1 }}
            onPress={()=> logout() }>
              <Text style={ styles.menuTexto }><Icon name="log-out-outline" size={20} color="#444444" />  Salir
              </Text>
            </TouchableOpacity>
 
        </DrawerContentScrollView>

      </>

  )
}