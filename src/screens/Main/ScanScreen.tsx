import React from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const ScanScreen = () => {

  const lounchLibrary = async () => {
    
    const result = await launchImageLibrary({
      mediaType: 'photo',

    }, (value) => {
      console.log(value);
    });
  }


  return (
    <View>
      
      <Text>Record</Text>
      <TouchableOpacity
        onPress={lounchLibrary}
      ><Text>Button</Text></TouchableOpacity>
    </View>
  )
}
