import React, { useRef, useState } from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { useWindowDimensions, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MainScreen } from '../screens/Main/MainScreen';
import { appTheme as styles } from '../styles/appTheme';
import { useEnlace } from '../hooks/useEnlace';
import { menuEnlaces } from '../helpers/getDominio';
import { useLogo } from '../hooks/useLogo';
import AutoHeightImage from 'react-native-auto-height-image';

const Drawer = createDrawerNavigator();
 
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
      <Drawer.Screen name="MainScreen" options={{ headerShown:false, swipeEnabled:false }} component={MainScreen}  />      
    </Drawer.Navigator>
  );
}
 
const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

  const { getEnlace } = useEnlace();
  const { LogoUrl } = useLogo();
  const [widthView, setWidthView] = useState(0)

  return (
 
      <>
        <DrawerContentScrollView>
          {/* parte del avatar */}
          
          <View style={ styles.avatarContainer }
          onLayout={(event) => {
            const {x, y, width, height} = event.nativeEvent.layout;
            setWidthView(width-30);
          }}
          >
            <AutoHeightImage
              style={{paddingVertical:15,paddingHorizontal:15}}
              width={widthView}
              source={{uri:LogoUrl}}
            />
          </View>
 
          {/* opciones de menu */}
          <View style={ styles.menuContainer }>
 
            <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> getEnlace(menuEnlaces.usuarioMiCuenta) }>
              <Text style={ styles.menuTexto }>Mi cuenta</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> getEnlace(menuEnlaces.usuarioDirecciones) }>
              <Text style={ styles.menuTexto }>Direcciones</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> getEnlace(menuEnlaces.usuarioPasswordChange) }>
              <Text style={ styles.menuTexto }>Cambiar contraseña</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> getEnlace(menuEnlaces.usuarioHistorial) }>
              <Text style={ styles.menuTexto }>Mis pedidos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={ styles.menuBoton }
            onPress={()=> getEnlace(menuEnlaces.cerrarSesion) }>
              <Text style={ styles.menuTexto }>Cerrar sesion
              </Text>
            </TouchableOpacity>
          </View>
 
        </DrawerContentScrollView>

      </>

  )
}