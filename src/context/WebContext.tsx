import React, { createContext, useReducer } from "react";
import { WebInterfaceProps, WebState, WebViewReference } from "../interfaces/interfaces";
import { WebReducer } from "./WebReducer";

const initialState:WebState = {
    injectJavaScript: ()=>{},
    togleDrawer:()=>{},
    url:'',
    webViewReference: null
}

export const WebContext = createContext({} as WebInterfaceProps);

export const WebProvider = ({children}:any) => {

    const [webData, dispatch] = useReducer(WebReducer, initialState);
    

    const saveInjectJavaScript = (callback:Function) =>{
               
        dispatch({
            type:'setParams',
            payload:{
                injectJavaScript: callback
            }
        })
       
    }

    const saveTogleDrawer = (callback:Function) => {
        dispatch({
            type:'setTogleDrawer',
            payload:{
                togleDrawer:callback
            }
        })
    }

    const saveWebView = (webViewReference:WebViewReference) => {
        dispatch({
            type:'setWebRef',
            payload:{
                webViewReference
            }
        })
    }

    const saveUrl = (url:string) =>{
        dispatch({
            type:'setUrl',
            payload:{
                url
            }
        })
    }

    return (
        <WebContext.Provider value={{
            ...webData,
            saveInjectJavaScript,
            saveTogleDrawer,
            saveWebView,
            saveUrl
        }}>
            {children}
        </WebContext.Provider> 

    )

}