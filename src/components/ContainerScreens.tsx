import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native'

export const ContainerScreens = ({children}:any) => {

    return (
        <SafeAreaView style={stylesMain.SafeareaView}>
            <ScrollView style={stylesMain.Scrollview}>
                
                {children} 
                
            </ScrollView>
        </SafeAreaView>
    )
}

const stylesMain = StyleSheet.create({
    SafeareaView:{
        flex: 1
    },
    Scrollview:{
        flex:1,
        paddingHorizontal:25,        
    }
});