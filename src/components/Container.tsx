import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native'

export const Container = ({children}:any) => {

    const { height } = useWindowDimensions();

    return (
        <SafeAreaView style={{ flex: 1}}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ ...stylesMain.bgBody, minHeight: height, backgroundColor:'#00953a'}}>
                {children} 
                </View>  
            </ScrollView>
        </SafeAreaView>
    )
}

const stylesMain = StyleSheet.create({
    bgBody:{
        backgroundColor:'#FFFFFF',
        flex:1,        
        justifyContent:'center',
        paddingHorizontal:25,
    }
});