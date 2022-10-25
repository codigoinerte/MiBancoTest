import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useContext, useEffect } from 'react'

import { ButtonFooter, WebViewComponent } from '../../components';
import { AuthContext, WebContext } from '../../context';
import urlDominio, { infoBasic } from '../../helpers/getDominio';

interface Props extends DrawerScreenProps<any,any>{};

export const MainScreen = ({navigation}:Props) => {

  const { loginData:{ token, alias } } = useContext(AuthContext);

  const { saveTogleDrawer } = useContext(WebContext);

  const { toggleDrawer } = navigation;

  useEffect(() => {
    
    saveTogleDrawer(toggleDrawer);

  }, [])
  

  const params1 = token != '' && typeof token !='undefined'  ? `action=access&codigo=${token}` : ``;
  const params2 = alias != '' && typeof alias !='undefined' ? `alias=${alias}` : ``;

  const uri = `${urlDominio}?${params1}${params2}`;
  
  return (

        <WebViewComponent 
          uri={uri}
          
        />

      
    
  )
                      
}
