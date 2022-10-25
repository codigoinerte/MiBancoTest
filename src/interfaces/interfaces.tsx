import { StyleProp, TextStyle, ViewStyle } from "react-native";
import WebView, { WebViewMessageEvent, WebViewNavigation } from "react-native-webview";
import { WebViewErrorEvent, WebViewNavigationEvent } from "react-native-webview/lib/WebViewTypes";
import { useWebview } from '../hooks/useWebview';

export interface PropsSplashScreen {
    // isAppReady: boolean;
    children: React.ReactNode;
}
export interface PropsBrand{
    style?: StyleProp<ViewStyle>,
    styleImagen?: StyleProp<ViewStyle>
}

export interface PropsAlert{
    message?:string,
    type:'success' | 'info' | 'warning' | 'danger';
    style?: StyleProp<ViewStyle>;
    styleText?: StyleProp<ViewStyle> | TextStyle;
}

export interface FormValuesLogin{
    user: string;
    password: string;
}

export interface apiStoreProps{
    dominio:string,
    action:string,
    body?:Object,
    method?:method
}

type method = 'POST' | 'GET';

export type statusAuth = 'firstLoading' | 'checking' | 'auth' | 'auth-invite' | 'no-auth';

export interface LoginProps {    
    user:string, 
    password:string, 
    token?:string
}

export interface AuthState{
    user: string,
    password:string,
    token:string,
    status: statusAuth,
    message: string,
    url:string,
    alias?:string
}

export interface AuthContextProps{
    loginData: AuthState,
    login: (loginParams:LoginProps)=> void,
    loginInvite:()=>void,
    logout:()=>void,
    setMessage:(message:string)=>void,
    changeStatus:(status:statusAuth)=>void,
    loginInviteSetAlias:(alias:string)=>void;
}

export interface LoginHookInterface{
    type:'success' | 'denied' | null,
    mensaje:string,
    data: Datos | null
}

export interface LoginInterface{
    respuesta: string;
    datos: Datos;
}

interface Datos {
  token: string;
}

export interface WebState {
    injectJavaScript:Function,
    togleDrawer:Function,
    webViewReference?: WebViewReference,
    url:string,
}


export type WebViewReference = {
    clearCache: Function , 
    clearFormData: Function, 
    clearHistory: Function, 
    goBack: Function,
    goForward: Function,
    injectJavaScript: Function,
    postMessage: Function,
    reload: Function,
    requestFocus: Function,
    stopLoading: Function,
} | null

export interface WebInterfaceProps extends WebState{
    saveInjectJavaScript:(callback:Function)=>void,
    saveTogleDrawer:(callback:Function)=>void,
    saveWebView:(callback:WebViewReference)=>void,
    saveUrl:(url:string)=>void,
}

export interface WebViewProps {
    uri:string,
    style?: StyleProp<ViewStyle>
}

export interface RefreshWebViewProps {    
    onMessage: ((event: WebViewMessageEvent) => void) & ((i: WebViewMessageEvent) => void),
    onLoadStart: ((event: WebViewNavigationEvent) => void) & (() => void),
    onLoadEnd: ((event: WebViewNavigationEvent | WebViewErrorEvent) => void) & (() => void),
    style?: StyleProp<ViewStyle>,    
    source: {
        uri: string;
    },        
}


export interface LogoResponse{
    respuesta:string
}