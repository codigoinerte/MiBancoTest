import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    authNoRegisBlock:{
        width:'100%',
        backgroundColor:'#f5f5f5',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
        borderRadius:5,
        marginTop:15,
        text:{
            color:"#000",
            fontSize:15
        }
    },
    authHighlighted:{
        fontSize:15,
        color:"#0093d3",
        padding:0,
        margin:0,
        fontWeight:'700'
    },
    AlignText:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row'
    }
});