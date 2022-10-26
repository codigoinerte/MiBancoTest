import React, { useRef, useState } from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { useWindowDimensions, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { appTheme as styles } from '../styles/appTheme';
import { ListScreen } from '../screens/Main/ListScreen';
import { Brand, HeaderMenu } from '../components';
import { TransferScreen } from '../screens/Main/TransferScreen';
import { SuccessScreen } from '../screens/Main/SuccessScreen';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export type DrawerStackParams = {    
  ListScreen: undefined,
  TransferScreen: undefined,
  SuccessScreen: {
    mensaje: string,
    operacion: string
  },
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
    </Drawer.Navigator>
  );
}
 
const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

  const { logout } = useContext(AuthContext);

  const [widthView, setWidthView] = useState(0)

  return (
 
      <>
        <DrawerContentScrollView>
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
          <View style={ styles.menuContainer }>
 
            <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> navigation.navigate('TransferScreen') }>
              <Text style={ styles.menuTexto }>Transferencia</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> logout() }>
              <Text style={ styles.menuTexto }>Salir
              </Text>
            </TouchableOpacity>
          </View>
 
        </DrawerContentScrollView>

      </>

  )
}