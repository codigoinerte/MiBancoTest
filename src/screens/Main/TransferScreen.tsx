import React from 'react'
import { Alert, BrandInner, Loader } from '../../components'
import { Button, TextInput } from 'react-native-paper';
import { useTransfer } from '../../hooks/useTransfer';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { appTheme } from '../../styles/appTheme';

export const TransferScreen = () => {

  const { mensaje, celular, monto, verifyAmount, verifyNumber, onChange, transferir, loader} = useTransfer();

  if(loader === true) return <Loader/>;
  
  
  return (
    <>
    <BrandInner />
    
        <View style={{display:'flex', justifyContent:'center', flexDirection:'column', minWidth:300, flex:1, padding:20}}>
          <View>
        {
          mensaje.length > 0 && <Alert type='warning' message={mensaje} />
        }

        <TextInput
            style={{...appTheme.inputStyle, marginBottom:15, backgroundColor:'#FFF'}}
            activeUnderlineColor="#00953a"
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
            style={{...appTheme.inputStyle ,marginBottom:15, backgroundColor:'#FFF'}}
            activeUnderlineColor="#00953a" 
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
        style={{...appTheme.buttonStyle, marginBottom:40}}
        labelStyle={{fontSize:18,color:"#FFF", lineHeight:50}}
        uppercase={false} 
        mode="contained" 
        icon={()=><Icon name="send-outline" size={20} color="#fff" />}
        onPress={()=>transferir() }>Transferir</Button>
        </View>
        </View>
                   
</>
  )
}
