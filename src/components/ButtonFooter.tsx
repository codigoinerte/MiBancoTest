import React, { useContext } from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

import { Button } from './Button';
import { useEnlace } from '../hooks/useEnlace';
import { AuthContext, WebContext } from '../context';
import { infoBasic, menuEnlaces } from '../helpers/getDominio';

interface Props {
    uri:string
}

export const ButtonFooter = ({uri}:Props) => {

    const { loginData, logout } = useContext(AuthContext);
    
    const { togleDrawer } = useContext(WebContext);

    const { token } = loginData;

    const { width } = useWindowDimensions();
    
    const boxWidth = width/4;

    const { getEnlace } = useEnlace();

    const miCuenta = () => {
        (token === '') ?  logout() : togleDrawer();
    }

    return ( !uri.includes(infoBasic.registrar)  && !uri.includes(infoBasic.recoveryPassword)  && !uri.includes(infoBasic.login)  && !uri.includes(infoBasic.terminosYcondiciones)) ?
     (
        <View style={styles.rowButtons}>
            <View style={{...styles.boxButtons, width: boxWidth}}>
                <Button nombre="Inicio" onPress={()=>getEnlace()} style={styles.ButtonStyle} textSize={11} textColor="#000">
                    <Icon style={styles.iconStyle} name='home-outline' size={15} />
                </Button>
            </View>
            <View style={{...styles.boxButtons, width: boxWidth}}>
                <Button nombre="Categorias" onPress={()=>getEnlace(menuEnlaces.categorias)} style={styles.ButtonStyle} textSize={11} textColor="#000">
                    <Icon style={styles.iconStyle} name='list-outline' size={15} />
                </Button>
            </View>
            <View style={{...styles.boxButtons, width: boxWidth}}>
                <Button nombre="Promociones" onPress={()=>getEnlace(menuEnlaces.promociones)} style={styles.ButtonStyle} textSize={11} textColor="#000">                    
                    <Icon style={styles.iconStyle} name="notifications-outline" size={15} />
                </Button>
            </View>
            <View style={{...styles.boxButtons, width: boxWidth}}>
                <Button nombre="Mi cuenta" onPress={miCuenta} style={styles.ButtonStyle} textSize={11} textColor="#000">
                    <Icon style={styles.iconStyle} name='person-outline' size={15} />
                </Button>
            </View>
        </View>
    )
    :
    (
        <></>
    )
}

const styles = StyleSheet.create({
    rowButtons:{
        backgroundColor:'#DDD',
        height:70,
        width:'100%',
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',

    },
    boxButtons:{
        height:80,
    },
    ButtonStyle:{
        width:'100%',
        height:'100%',
        borderRadius:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent'

    },
    iconStyle:{
        marginBottom:4,
        color:"#000"
    }
});