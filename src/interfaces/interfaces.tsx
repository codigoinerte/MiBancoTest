import { DrawerScreenProps } from "@react-navigation/drawer";
import { StyleProp, TextStyle, ViewStyle } from "react-native";


export interface PropsSplashScreen {
    // isAppReady: boolean;
    children: React.ReactNode;
}
export interface PropsBrand{
    style?: StyleProp<ViewStyle>,
    styleImagen?: StyleProp<ViewStyle>,
    imageRoute?:string,
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
    password:string
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



export interface LogoResponse{
    respuesta:string
}


export interface ClientList {
  transacciones: Transacciones[] | [];
}

export interface Transacciones {
  cliente: string;
  monto: string;
  fechaoperacion: string;
}

export interface Transferencia {
  operacion: number;
  mensaje: string;
}

export interface PropsMenu extends DrawerScreenProps<any, any>{};