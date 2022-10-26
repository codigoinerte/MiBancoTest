import React, { useState, useEffect } from 'react'
import { ClientList, Transacciones } from '../interfaces/interfaces';

export const useList = () => {

    const [loader, setLoader] = useState(false);
    
    const [data, setData] = useState<Transacciones[]>([]);    

    useEffect(() => {
        setLoader(true);
        try {
            fetch('https://transfer-project-313f8.web.app/transacciones.json')
            .then(response=>response.json())
            .then((data:ClientList)=>setData(data.transacciones));
            setLoader(false);
        } catch (error:any) {
            setLoader(false);
            throw new Error(error);
        }
      
    }, []);

  return  {
    data,
    loader
  }
}
