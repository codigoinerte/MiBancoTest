import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const ScanScreen = () => {

  const [log, setLog] = useState<any>();

  const lounchLibrary = async () => {
    
    const result = await launchImageLibrary({
      mediaType: 'photo',

    }, (value) => {
      setLog(value);
    });
  }


  return (
    <View>
      
     
      <TouchableOpacity
      style={{backgroundColor:'#f9a825',display:'flex',width:150,padding:15,marginHorizontal:30, marginVertical:40}}
        onPress={lounchLibrary}
      ><Text style={{color:'#fff'}}>Button</Text></TouchableOpacity>

      <Text style={{color:'#000'}}>{ JSON.stringify(log, '', 3)}</Text>
    </View>
  )
}
