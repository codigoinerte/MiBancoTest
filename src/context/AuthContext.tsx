import React, { createContext, useEffect, useReducer } from "react";
import { AuthContextProps, AuthState, LoginProps, statusAuth } from "../interfaces/interfaces";
import { AuthReducer } from "./AuthReducer";

import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

const userData = { user:'', password:'', token:'' }

const initialState:AuthState = {
    status:'firstLoading',
    user:'',
    password:'',
    token:'',
    message:'',
    url:'',
    alias:'',
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}:any) => {

    const [loginData, dispatch] = useReducer(AuthReducer, initialState);
    
    useEffect(() => {
        checkingAuth();
    }, []);

    const checkingAuth = () => {
       
        const jsonUser = storage.getString('user') ||  JSON.stringify(userData); // { 'user': 'password', 'token' }
        const userObject = JSON.parse(jsonUser);

        if(userObject.user != '' && userObject.password !='' && userObject.token !=''){
            login(userObject);
        }else{
            logout();
        }
    }

    const login = async ({user, password, token = ''}: LoginProps) =>{
        
        const userData = { user, password, token }

        storage.set('user', JSON.stringify(userData))

        dispatch({type:'changeStatus', payload:{status:'checking'}});

        dispatch({
                type:'login', 
                payload:{
                    status:'auth',
                    user,
                    password,
                    token    
        }});

       
    }

    const loginInvite = () => {
                
        dispatch({
            type:'login-invite',
            payload:{
                status:'auth-invite'
            }
        });
    }

    const logout = () => {

        storage.delete('user');

        dispatch({
            type:'logout', payload:{
                status: 'no-auth'
            }
        })
    }

    const loginInviteSetAlias = (alias:string) => {

        dispatch({
            type:'login-invite',
            payload:{
                status:'auth-invite',
                alias
            }
        });
    }

    const setMessage = (message:string)=> {
        dispatch({
            type:'setMessage',
            payload:{
                message
            }
        })
    }

    const changeStatus = (status:statusAuth) => {
        dispatch({
            type:'changeStatus',
            payload:{
                status
            }
        })
    }
    

    return (
        <AuthContext.Provider value={{
            loginData,
            login,
            logout,
            loginInvite,
            changeStatus,
            setMessage,
            loginInviteSetAlias
        }}>
            {children}
        </AuthContext.Provider> 

    )

}