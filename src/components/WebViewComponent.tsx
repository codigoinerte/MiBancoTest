import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'

import WebView from 'react-native-webview';

import { Loader } from './Loader';
import { WebViewProps } from '../interfaces/interfaces';

import { ButtonFooter } from './ButtonFooter';
import { useWebview } from '../hooks';
import { webViewStyle } from '../styles/webViewStyle';

export const WebViewComponent = ({ uri }:WebViewProps) => {
    
    const {visible, handleMessage, setvisible, setHeight, onRefresh, setEnabled, onLoadEnd, injectedJavaScript, refreshing, isEnabled, webviewRef, height } = useWebview();
    
    return (
        <>     
            {
                (visible) && <Loader style={webViewComponent.loader} />            
            }                   
            <View style={webViewComponent.container}>            
                <ScrollView
                    onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
                    refreshControl={
                        <RefreshControl
                        onRefresh={onRefresh}
                        refreshing={refreshing}
                        enabled={isEnabled}
                        />
                    }
                    style={webViewStyle.view}>
                    <WebView
                        injectedJavaScript={ injectedJavaScript }
                        ref={ (e)=> {
                            webviewRef.current = e;                           
                        } }
                        onScroll={(e) => setEnabled( e.nativeEvent.contentOffset.y === 0 ) }
                        style={[webViewStyle.view, { height } ]}                        
                        source={{ uri }}
                        onMessage={(i) => handleMessage(i)}
                        onLoadStart={()=> setvisible(true)}
                        onLoadEnd={onLoadEnd}
                        javaScriptEnabledAndroid={true}
                        incognito={true}
                    />
                </ScrollView>
                <ButtonFooter uri={uri}/>

            </View>  
        </>
    )
}

const webViewComponent = StyleSheet.create({
    loader:{
        zIndex:1,
        position:'absolute',
        width:'100%',
        height:'100%'
    },
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FFFFFF'
    },
    refreshWebView:{
        backgroundColor:"#FFFFFF"
    }
});