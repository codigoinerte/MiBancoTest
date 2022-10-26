import React from 'react'
import { Alert, BrandInner, Container, CustomIcon, CustomMarkerCam, Loader } from '../../components'
import { Button, TextInput } from 'react-native-paper';
import { useTransfer } from '../../hooks/useTransfer';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { appTheme, colores } from '../../styles/appTheme';

export const TransferScreen = () => {

  const { mensaje, celular, monto, nota, verifyAmount, verifyNumber, onChange, transferir, loader} = useTransfer();

  if(loader === true) return <Loader/>;
  
  
  return (
    <>
        <Container>
        <BrandInner />
        <View style={{display:'flex', justifyContent:'center', flexDirection:'column', minWidth:300, flex:1, padding:20, backgroundColor:'#f2f2f2', marginHorizontal:-25}}>
          <View>
        {
          mensaje.length > 0 && <Alert type='warning' message={mensaje} />
        }

        <View>
        <TextInput
            style={{...appTheme.inputStyle, marginBottom:15, backgroundColor:'#FFF', color:'#000',paddingLeft:25}}
            activeUnderlineColor="#00953a"
            placeholderTextColor="#888"
            underlineColor='#f2f2f2'
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
          <CustomIcon color='#757575' name='phone-portrait-outline' size={18} style={{position:'absolute', top:22, left:10}} />
        </View>
        <TextInput
            style={{...appTheme.inputStyle ,marginBottom:15, backgroundColor:'#FFF'}}
            activeUnderlineColor="#00953a" 
            placeholderTextColor="#888"
            keyboardType='decimal-pad'
            underlineColor='#f2f2f2'
            theme={{
              colors:{
                text:"#000"
              }
            }}
            left={<TextInput.Affix text="S/ " />}
            placeholder="monto"
            onChangeText={(value)=>onChange(verifyAmount(value), 'monto')}
            value={monto}
          />
        
        <TextInput
            style={{...appTheme.inputStyle ,marginBottom:15, backgroundColor:'#FFF'}}
            activeUnderlineColor="#fff" 
            placeholderTextColor="#888"
            underlineColor='#f2f2f2'
            theme={{
              colors:{
                text:"#000"
              }
            }}

            placeholder="nota"
            onChangeText={(value)=>onChange(value, 'nota')}
            value={nota}
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
      </Container>         
</>
  )
}
