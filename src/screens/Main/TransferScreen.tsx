import React from 'react'
import { Alert, Brand, ContainerScreens, Loader } from '../../components'
import { Button, TextInput } from 'react-native-paper';
import { useTransfer } from '../../hooks/useTransfer';

export const TransferScreen = () => {

  const { mensaje, celular, monto, verifyAmount, verifyNumber, onChange, transferir, loader} = useTransfer();

  if(loader === true) return <Loader/>;
  
  
  return (
    <>
    <ContainerScreens>

        <Brand />

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
            keyboardType='phone-pad'
            placeholder="celular"
            onChangeText={(value)=>onChange((value), 'celular')}
            value={celular}
          />
        
        <TextInput
            style={{marginBottom:15, backgroundColor:'#FFF'}}
            activeUnderlineColor="#00953a"     
            underlineColor="#888"
            placeholderTextColor="#888"
            keyboardType='decimal-pad'
            theme={{
              colors:{
                text:"#000"
              }
            }}

            placeholder="monto"
            onChangeText={(value)=>onChange(verifyAmount(value), 'monto')}
            value={monto}
          />


        <Button 
        style={{backgroundColor:"#00953a", marginBottom:40}}
        labelStyle={{fontSize:16,color:"#FFF"}}
        uppercase={false} 
        mode="contained" 
        onPress={()=>transferir() }>Transferir</Button>

    </ContainerScreens>                
</>
  )
}
