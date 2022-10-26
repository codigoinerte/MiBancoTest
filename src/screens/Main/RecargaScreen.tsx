import React from 'react'
import { Alert, BrandInner, Container, CustomIcon, Loader } from '../../components';
import { useTransfer } from '../../hooks/useTransfer';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { appTheme } from '../../styles/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const RecargaScreen = () => {
  
    const { mensaje, celular, monto, nota, verifyAmount, verifyNumber, onChange, transferir, loader} = useTransfer('RecargaSuccessScreen');

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
          
  
          <Button 
          style={{...appTheme.buttonStyle, marginBottom:40}}
          labelStyle={{fontSize:18,color:"#FFF", lineHeight:50}}
          uppercase={false} 
          mode="contained" 
          icon={()=><Icon name="send-outline" size={20} color="#fff" />}
          onPress={()=>transferir() }>Recargar</Button>
          </View>
          </View>
        </Container>         
  </>
    )
}
