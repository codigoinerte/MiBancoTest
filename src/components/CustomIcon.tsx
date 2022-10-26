import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleProp, TextStyle } from 'react-native';

interface Props {
    name:string;
    size:number;
    color: string;
    style?: StyleProp<TextStyle>
}

export const CustomIcon = ({name ,size ,color,style={}}:Props) => {
  return (
    <Icon name={name}
    style={style}
    size={size} 
    color={color} />
    
  )
}
