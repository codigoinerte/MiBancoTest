import React from 'react'
import { View, Image } from 'react-native';

export const BrandInner = () => {
  return (
    <>
        <View style={{ justifyContent:'center', display:'flex', alignItems:'center', backgroundColor:'#00953a', minHeight:220}}>
                <Image
                        source={require('../assets/logo-auth.png')}
                        resizeMode="contain"
                        style={{ marginVertical:25 }} />            
        </View>
    </>
  )
}
