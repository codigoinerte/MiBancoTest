
import { DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer';
import React, {useEffect} from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { PropsMenu } from '../interfaces/interfaces';
import { useNavigation } from '@react-navigation/native';

export const HeaderMenu = () => {

    const navigation = useNavigation();

  return (
    <>
        <View style={{backgroundColor:'#00953a', minHeight:80, justifyContent:'center' }}>
            <TouchableOpacity 
                onPress={()=> navigation.toggleDrawer() }
                style={{backgroundColor:'#00953a',width:80, alignItems:'center',padding:1,paddingVertical:15,borderTopRightRadius:5,borderBottomRightRadius:5}}
                >
                <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <Icon name="menu-outline" size={30} color="#fff" />
                    
                </View>
            </TouchableOpacity>

        </View>
    </>
  )
}