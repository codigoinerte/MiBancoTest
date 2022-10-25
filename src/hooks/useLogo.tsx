import { useEffect, useState } from "react";
import { loginApi } from "../api/loginApi";
import { infoBasic, logo } from "../helpers/getDominio";
import { LogoResponse } from '../interfaces/interfaces';

import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const useLogo = () => {
  
    const [LogoUrl, setLogoUrl] = useState(`https://${infoBasic.dominio}/templates/default/images/logo.png`);
    
    useEffect(() => {

        const logoTemp = storage.getString('logo') || '';

        if(logoTemp === ''){
            loadLogin();
        }else{
            setLogoUrl(logoTemp);
        }

    }, [])
    

    const loadLogin = async () => {

        
        try {       
            
            const url = logo;
            const { data } = await loginApi.post<LogoResponse>(url);
            setLogoUrl(data.respuesta);

            storage.set('logo', data.respuesta);
        
        } catch (error:any) {}                                        
    }


    return {
        LogoUrl
    }
}
