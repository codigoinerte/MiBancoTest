import { AuthState, statusAuth } from "../interfaces/interfaces"

type AuthAction = 
    | { type:'login', payload: { status: statusAuth, user:string, password:string, token?:string } }
    | { type:'login-invite', payload: { status: statusAuth, alias?:string} }
    | { type:'logout', payload: { status: statusAuth } }
    | { type:'changeStatus', payload: { status: statusAuth } }
    | { type:'setMessage', payload: { message: string } }

export const AuthReducer = (state:AuthState, action: AuthAction):AuthState => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                status: action.payload.status,
                user: action.payload.user,
                password: action.payload.password,
                token: action.payload.token!
            }

        case 'login-invite':
            return {
                ...state,
                status: action.payload.status,
                alias: action.payload.alias
            }
        case 'logout':
            return {
                ...state,
                status: action.payload.status,
                user:'',
                password:'',
                token:'',
            }
        case 'changeStatus':
            return {
                ...state,
                status: action.payload.status
            }
        case 'setMessage':
            return {
                ...state,
                message: action.payload.message
            }
        default:
            return state;
    }
}