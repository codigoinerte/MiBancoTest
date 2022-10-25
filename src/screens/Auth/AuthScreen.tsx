import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-paper';

import { AuthContext } from '../../context';
import { Brand, Container } from '../../components';
import { infoBasic } from '../../helpers/getDominio';

export const AuthScreen = () => {

  const { navigate } = useNavigation();
  const { loginInvite, loginInviteSetAlias } = useContext(AuthContext)

  return (
    <Container>
        
        <Brand style={{marginBottom:25}} />

        <Button 
          style={{marginBottom:15, backgroundColor:"#0093d3"}}
          labelStyle={{fontSize:16,color:"#FFF"}}
          uppercase={false} 
          mode="contained"           
          onPress={() => navigate('LoginScreen' as never)}>
          Ingresar
        </Button>

        <Button 
          style={{marginBottom:15,borderWidth:1, borderColor:"#DDD"}}
          labelStyle={{fontSize:16, color:"#0093d3"}}
          uppercase={false} 
          mode="outlined" 
          onPress={() => loginInviteSetAlias(infoBasic.registrar) }>
          Registrarte
        </Button>

        <Button 
          style={{marginBottom:15}}
          labelStyle={{fontSize:16, color:"#0093d3"}}
          uppercase={false} 
          mode="text" 
          onPress={loginInvite}>
          Ingresar como invitado
        </Button>
    </Container>
  )
}
