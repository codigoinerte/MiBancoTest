import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6',
    gradiendPrimary:'linear-gradient(0deg, rgba(88,86,214,1) 0%, rgba(86,154,215,1) 46%, rgba(71,183,218,1) 100%);'
}

export const appTheme = StyleSheet.create({
    
    globalMargin:{
        marginHorizontal: 20
    },
    title:{
        fontSize:30,
        color:'#000',
        marginBottom:15
    },
    parrafo:{
        fontSize:15,
        color:'#000'
    },
    avatar:{
        minHeight:150,        
        width:'100%',
        height:'auto',
        
        // borderRadius:100
    },
    avatarContainer:{
        backgroundColor:'transparent',
        alignItems:'center',
        marginTop:15,
    },
    menuContainer:{
        marginVertical: 10,
        color:'#000000',
        marginHorizontal:15,
        
    },
    menuBoton:{
        marginVertical:5,
        borderRadius:10,
        padding:10
    },
    menuTexto:{
        color:'#000',
        fontSize:20
    }

});