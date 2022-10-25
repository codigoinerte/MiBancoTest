import { useState, useContext } from 'react';
import { loginApi } from "../api/loginApi";
import { AuthContext } from '../context/AuthContext';
import urlDominio from "../helpers/getDominio";
import { FormValuesLogin, LoginHookInterface, LoginInterface } from "../interfaces/interfaces";
import { useForm } from "./useForm";

export const useLogin = () => {

    const { login } = useContext(AuthContext);
    
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const [loader, setLoader] = useState(false);

    const {form, onChange} = useForm<FormValuesLogin>({
      user:'',
      password:''
    });
  
    const { user, password } = form;

    const [message, setMessage] = useState<LoginHookInterface>({
        type:null,
        mensaje:'',
        data:null
    })

    const onSubmit = async (user:string, password:string) => {

        if(typeof user === 'undefined' || user === ''){
            setMessage({
                ...message,
                mensaje: 'El campo del usuario debe estar completo'
            });
            return false;
        }
        
        if(typeof password === 'undefined' || password === ''){        
            setMessage({
                ...message,
                mensaje: 'El campo de la contraseña debe estar completo'
            });
            return false;
        }
    
        const datos = {
            username:user,
            password:password
        }
        
        setLoader(true);

        try {       
            
            const url = `${urlDominio}?action=login`;
            const { data } = await loginApi.post<LoginInterface>(url, datos);
            const { datos: { token } } = data;            
            
            login({ user, password, token });

            setLoader(false);
        
        } catch (error:any) {
        
            const errorResponse =  error.response.data.respuesta || 'Error en los campos del login';
            
            setMessage({
                ...message,
                type:'denied',
                mensaje:errorResponse
            });

            setLoader(false);
            
        }                                        
    }

    return{
        loader,
        ...message,
        ...form,
        onChange,
        secureTextEntry,
        setSecureTextEntry,
        onSubmit
    }

};