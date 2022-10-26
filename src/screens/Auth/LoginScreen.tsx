import React, { useContext } from 'react'
import { Button, TextInput } from 'react-native-paper';

import { Alert, Brand, Container, Loader } from '../../components'
import { AuthContext } from '../../context';
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
            activeUnderlineColor="#00953a"     
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
          activeUnderlineColor="#00953a"
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
          style={{backgroundColor:"#00953a"}}
          labelStyle={{fontSize:16,color:"#FFF"}}
          uppercase={false} 
          mode="contained" 
          onPress={()=> onSubmit(user, password)}>
          Ingresar
        </Button>
        

        
    </Container>
  )
}
