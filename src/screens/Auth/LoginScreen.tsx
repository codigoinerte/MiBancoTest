import React, { useContext } from 'react'
import { Button, TextInput } from 'react-native-paper';

import { Alert, Loader } from '../../components'
import { AuthContext } from '../../context';
import { useBlackSpace, useLogin } from '../../hooks';
import { View, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export const LoginScreen = () => {

  const { loginInviteSetAlias } = useContext(AuthContext);

  const { onSubmit, onChange, user, password, secureTextEntry, setSecureTextEntry, loader, mensaje } = useLogin();
  
  if(loader) return <Loader/> ;
  
  return (
    
      <>
      <SafeAreaView style={{ flex: 1}}>
          <ScrollView style={{ flex: 1 }}>

           
                <View style={{flex:1,display:'flex', backgroundColor:'#00953a'}}>
                  <View style={{height:360, alignItems:'center'}}>

                    {/* <Brand style={{marginBottom:25,zIndex:2, position:'absolute'}} /> */}
                    <Image
                      source={require('../../assets/logo-auth.png')}
                      resizeMode="contain"
                      style={{zIndex:2, height:50, top:30}} />
                    <Image 
                          source={require('../../assets/auth-bg.jpg')}
                          style={{position:'absolute', top:-50, left:-25, right:0, width:450, height:500}} />
                  </View>
                  <View style={{zIndex:3, backgroundColor:'#00953a',flex:1, padding:20, borderRadius:40, justifyContent:'center',alignItems:'center', flexDirection:'row', minHeight:350}}>
                    <View style={{minWidth:300}}>
                      {
                        mensaje.length > 0 && <Alert type='warning' message={mensaje} />
                      }

                      <TextInput
                          style={loginStyle.inputStyle}
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
                        style={{...loginStyle.inputStyle, marginBottom:15 }}
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
                        style={loginStyle.buttonStyle}
                        labelStyle={loginStyle.buttonTextStyle}
                        uppercase={false} 
                        mode="contained" 
                        onPress={()=> onSubmit(user, password)}>
                        Ingresar
                      </Button>
                      </View>
                  </View>
                
                </View>

          </ScrollView>
      </SafeAreaView>
    </>
  )
}

const loginStyle = StyleSheet.create({
    figureStyle :{
      width:'100%', 
      height:100, 
      backgroundColor:'#00953a', 
      position:'absolute',
      bottom:0
      
    },
    inputStyle:{
      marginBottom:15,
      backgroundColor:'#FFF',
      borderRadius:15,
      borderTopEndRadius:15,
      borderTopLeftRadius:15
    },
    buttonStyle:{
      backgroundColor:"#f78000",
      height:65,
      lineHeight:65,
      fontSize:25,
      borderRadius:15
    },
    buttonTextStyle:{
      fontSize:20,
      color:"#FFF",
      lineHeight:40,
      textAlign:'center'
    }
});