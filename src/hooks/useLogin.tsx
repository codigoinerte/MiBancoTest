import { useState, useContext } from 'react';
import { loginApi } from "../api/loginApi";
import { AuthContext } from '../context/AuthContext';
import { FormValuesLogin, LoginHookInterface, LoginInterface } from "../interfaces/interfaces";
import { useForm } from "./useForm";

export const useLogin = () => {

    const { login } = useContext(AuthContext);
    
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const [loader, setLoader] = useState(false);

    const {form, onChange} = useForm<FormValuesLogin>({
      user:'Usuario',
      password:'1234567'
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

        if(user == 'Usuario' && password == '1234567')
        {
            login({ user, password });

            setLoader(false);
        }
        else
        {

        }

        setLoader(false);                                       
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