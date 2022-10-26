import React, {useState,useRef} from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Button, CustomIcon, CustomMarkerCam } from '../../components';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';

import { useNavigation } from '@react-navigation/native';


export const QrScreen = () => {

    const navigation = useNavigation();
  const refQr = useRef<any>();

  const [flash, setFlash] = useState(false);  

  const onSuccess = (e: BarCodeReadEvent) => {
    
    if(e.data != ''){
      // navigation.navigate('TransferScreen', {codigo: e.data})
    }
    
  };

  const OnScanQr = () => {
    refQr.current.reactivate();
  }

  return (
    <>      
      <QRCodeScanner
        ref={ refQr }    
        bottomViewStyle={styles.bottomViewStyle}
        cameraContainerStyle={styles.cameraContainerStyle}
        cameraStyle={styles.cameraStyle}
        containerStyle={styles.containerStyle}
        topViewStyle={styles.topViewStyle}
        showMarker={true}
        markerStyle={styles.markerStyle}
        onRead={onSuccess}
        fadeIn={false}
        flashMode={ (flash) ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off }        
        topContent={
          <>
              <Button 
                onPress={()=>console.log(1)} // navigation.navigate('ListScreen')
                style={styles.buttonStyle}
                nombre={
                  <CustomIcon color='#FFF' size={25} name="return-up-back-outline"  />
                }
            />
            <Button 
                onPress={()=>setFlash(!flash)}
                style={styles.buttonStyle}
                nombre={
                  <CustomIcon color='#FFF' size={25} name={ (flash) ? 'flash-outline' : 'flash-off-outline'  }  />
                }
            />
          </>
        }
        bottomContent={
          <>
              <Button 
                onPress={OnScanQr}
                style={{...styles.buttonStyle, ...styles.buttonScann}}
                nombre={
                  
                    <>
                      <CustomIcon color='#000' size={25} name="scan-outline"  />
                      <Text style={{color:'#000'}}> Escanear</Text>
                    </>
                  
                }
              />
              
          </>
        }
        customMarker={
         <CustomMarkerCam />
        }
      />

      </>
  )
}

const styles = StyleSheet.create({
    containerStyle:{
      backgroundColor:'white',
      flex:1,
      flexDirection:'column',
      justifyContent:'space-between'
    },
    topViewStyle:{

      backgroundColor:'transparent',
      paddingVertical:5,
      paddingHorizontal:5,
      zIndex:2,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      maxHeight:70,
      
    },
    bottomViewStyle:{

      backgroundColor:'transparent',
      maxHeight:200,
      paddingVertical:5,
      paddingHorizontal:5,
      zIndex:2,
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
    },
    cameraContainerStyle:{
      flex:1,     
      position:'absolute',
      height:'100%'       

    },
    cameraStyle:{
      // flex:1,
      // position:'absolute',
      
      height:'100%',
      
    },
    buttonStyle:{
      width:50,
      left:0,
      backgroundColor:'transparent'
    },
    buttonScann:{      
      backgroundColor:'white',
      width:180,       
      zIndex:5,

      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
    },
    markerStyle:{
      // backgroundColor:'rgba(0,0,0,0.5)',
      borderWidth:0,
      width:'100%',
      position:'absolute',
      height:'100%',
    },

});