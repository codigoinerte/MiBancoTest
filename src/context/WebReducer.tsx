import { WebState, WebViewReference } from "../interfaces/interfaces";

type WebAction = 
    | { type:'setParams', payload: { injectJavaScript:Function } }
    | { type:'setTogleDrawer', payload: { togleDrawer:Function } }
    | { type:'setWebRef', payload: { webViewReference:WebViewReference } }
    | { type:'setUrl', payload: { url:string } }
    
export const WebReducer = (state:WebState, action: WebAction):WebState => {
    switch (action.type) {
        case 'setParams':
            return {
                ...state,
                injectJavaScript: action.payload.injectJavaScript
            }   
        case 'setTogleDrawer':
            return {
                ...state,
                togleDrawer: action.payload.togleDrawer
            }
        case 'setWebRef':
            return {
                ...state,
                webViewReference: action.payload.webViewReference
            }
        case 'setUrl':
            return {
                ...state,
                url: action.payload.url
            }
        default:
            return state;
    }
}