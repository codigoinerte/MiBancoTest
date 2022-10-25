import React from 'react'
import { ColorValue, GestureResponderEvent, StyleSheet, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';


interface Props {
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined;
    textColor?: ColorValue | undefined;
    textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
    textSize?: number | undefined;
    style?: StyleProp<ViewStyle>;
    nombre: string | JSX.Element;
    children?:JSX.Element
}

export const Button = ({ onPress, nombre, style, textColor="white", textAlign="center", textSize=20, children }: Props) => {
  return (
    <>
        <TouchableOpacity
            activeOpacity={0.9}
            style={{
                ...styles.button,
                ...style as any              
            }}
            onPress={ onPress }
            >
                { children }
                <Text style={{
                    color: textColor,
                    textAlign: textAlign,
                    fontSize:textSize}}>{ nombre }</Text>
            </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#344472",
        justifyContent:'center',
        width:150,
        height:50,
        borderRadius:10,
    }
});
