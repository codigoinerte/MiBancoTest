import { useContext, useEffect, useRef, useState } from "react";
import { BackHandler, Dimensions } from "react-native";
import { AuthContext, WebContext } from "../context";
import { infoBasic, menuEnlaces } from "../helpers/getDominio";
import { useEnlace } from "./useEnlace";

export const useWebview = () => {
  
    const { webViewReference, saveInjectJavaScript, saveWebView, url } = useContext(WebContext);
    
    const { loginData, logout } = useContext(AuthContext);

    const { token } = loginData;

    const [visible, setvisible] = useState(true);

    const [currentPage, setCurrentPage] = useState('');
    
    const { setCustomEnlace } = useEnlace();

    const webviewRef = useRef<any>();    

    const [height, setHeight] = useState(Dimensions.get('screen').height);
    
    const [isEnabled, setEnabled] = useState(true);

    const [refreshing, setRefreshing] = useState(false);

    // const { loader, printImage } = usePrinter();

    useEffect(() => {
      
        saveWebView(webviewRef.current)
  
    }, [])
      
    useEffect(() => {

        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
    }, [currentPage]);
      
    useEffect(() => {
        
        saveInjectJavaScript(webviewRef.current.injectJavaScript)

    }, []);

    const backAction = () => {
                   
        if(currentPage != '')
        {
            if(
                (
                   currentPage.includes(menuEnlaces.usuarioMiCuenta)
                || currentPage.includes(menuEnlaces.usuarioDirecciones)
                || currentPage.includes(menuEnlaces.usuarioPasswordChange)
                || currentPage.includes(menuEnlaces.usuarioHistorial)
                || currentPage.includes(menuEnlaces.categorias)
                || currentPage.includes(menuEnlaces.promociones)
                
                )){
                
               
            }else if(
                ( currentPage.includes(infoBasic.recoveryPassword) 
                || currentPage.includes(infoBasic.login) 
                || currentPage.includes(infoBasic.registrar) )
                && !currentPage.includes(infoBasic.terminosYcondiciones)
                && token === ''
            ){

            logout();
           
            }else{            

                const jsCode = `history.back()`;
    
                webViewReference!.injectJavaScript(jsCode);
                         
            }
            
        }

        return true;
    }

    const handleMessage = (evt: any) => {    
       
        const message = JSON.parse(evt.nativeEvent.data || '');
        
        switch (message.command || '') {
            case 'url':
                if (message.payload.url =='') return false;
                const urlImprimir = message.payload.url;            
                
            case 'getPreviousPage':
                if (message.payload.url =='') return false;
                                                                               
            case 'navegar':
                if (message.payload.url =='') return false;
                    setCustomEnlace(message.payload.url);
                
            case 'close_navegador':
                
                if(message.payload.accept == 1)
                {
                    logout();
                }
        
            default:    
                setCurrentPage(message);
                
        }                                               
    } 

    const onLoadEnd = ()=> {

        setvisible(false);
    }



    const onRefresh = () => {
        
        setRefreshing(true);

        webviewRef.current.reload();

        setRefreshing(false);
        
    };    

    const injectedJavaScript = `(function() {
        
        const previous = document.referrer;       
        window.ReactNativeWebView.postMessage(JSON.stringify(location.href));
        
    })();`;

    

    return {
        logout,
        visible,
        setvisible,
        handleMessage,        
        setHeight,
        onRefresh,
        setEnabled,
        onLoadEnd,
        refreshing,
        isEnabled,
        webviewRef,
        height,
        injectedJavaScript,
    }
}
