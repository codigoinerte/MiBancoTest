import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { WebContext } from "../context/WebContext";
import { infoBasic } from "../helpers/getDominio";

export const useEnlace = () => {

    const { injectJavaScript, togleDrawer } = useContext(WebContext);

    const { logout } = useContext(AuthContext);

    const getEnlace = (alias:string = '') => {
        
        const enlace = `https://${infoBasic.dominio}/${alias!='' || typeof alias !='undefined' ? alias : ''}`;               
        
        const jsCode = `window.location='${enlace}'`;
        
        injectJavaScript(jsCode);   

        if(alias != 'categorias' 
        && alias != 'promociones'
        && alias != 'registrar'
        && alias != '') {          
          togleDrawer();
        }

        if(alias === 'cerrar-sesion'){
            logout();
        }
    }

    const setCustomEnlace = (url:string='') => {
      if(url != ''){

        const jsCode = `window.location='${url}'`;
        
        injectJavaScript(jsCode);   
      }
    }
    

  return {
    getEnlace,
    setCustomEnlace
  }
}
