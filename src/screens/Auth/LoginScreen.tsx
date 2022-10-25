import React, { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native';

import { Button, TextInput, Text } from 'react-native-paper';

import { Alert, Brand, Container, Loader } from '../../components'
import { AuthContext } from '../../context';
import { infoBasic } from '../../helpers/getDominio';
import { loginStyle } from '../../styles/loginStyle';
import { useBlackSpace, useLogin } from '../../hooks';

export const LoginScreen = () => {

  const { loginInviteSetAlias } = useContext(AuthContext);

  const { onSubmit, onChange, user, password, secureTextEntry, setSecureTextEntry, loader, mensaje } = useLogin();
  
  if(loader) return <Loader/> ;
  
  return (
    <Container>
        
        <Brand style={{marginBottom:25}} />
  
        {
          mensaje.length > 0 && <Alert type='warning' message={mensaje} />
        }

        <TextInput
            style={{marginBottom:15, backgroundColor:'#FFF'}}
            activeUnderlineColor="#0093d3"     
            underlineColor="#888"
            placeholderTextColor="#888"
    
            theme={{
              colors:{
                text:"#000"
              }
            }}

            placeholder="Usuario"
            onChangeText={(value)=>onChange(useBlackSpace(value), 'user')}
            value={user}
          />

        <TextInput
          style={{marginBottom:15, backgroundColor:'#FFF'}}
          activeUnderlineColor="#0093d3"
          underlineColor="#888"
          placeholderTextColor="#888"

          theme={{
            colors:{
              text:"#000"
            }
          }}

          placeholder="Contraseña"
          onChangeText={(value)=>onChange(useBlackSpace(value), 'password')}
          value={password}
          secureTextEntry={secureTextEntry}          
          right={ 
            <TextInput.Icon 
              labelStyle={{fontSize:16}}      
              name={ (secureTextEntry)?"eye":"eye-off" }

              theme={{
                colors:{
                  text:"#000"
                }
              }}
  
              onPress={() => {
                setSecureTextEntry(!secureTextEntry);
                return false;
              }}
              />}
        />
        
       

        <Button 
          style={{backgroundColor:"#0093d3"}}
          labelStyle={{fontSize:16,color:"#FFF"}}
          uppercase={false} 
          mode="contained" 
          onPress={()=> onSubmit(user, password)}>
          Ingresar
        </Button>
        

        
    </Container>
  )
}
