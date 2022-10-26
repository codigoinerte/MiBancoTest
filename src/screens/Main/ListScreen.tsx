import React from 'react';
import { Button } from 'react-native-paper';
import { Brand, ItemList, ItemSeparator, Loader, ItemHeader, BrandInner } from '../../components';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useList } from '../../hooks';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props extends DrawerScreenProps<any, any>{};

export const ListScreen = ({ navigation }: Props ) => {

  const { data, loader } = useList();

  if(loader) return <Loader/>;
    
  return (
    <>
        <View style={{flex:1}}>
            <BrandInner />

            <View style={List.Container}>
            
                <SafeAreaView style={List.safeArea}>
                
                    <FlatList
                        data={data}
                        renderItem={({item}) => (<ItemList {...item}/>)}
                        keyExtractor={(item, index) => `item-${index}${item.fechaoperacion}${item.monto}`}
                        ItemSeparatorComponent={ () => <ItemSeparator /> }
                        ListHeaderComponent={()=><ItemHeader />} 
                        style={{height:250}}                   
                    />
                
                </SafeAreaView>

            </View> 

                
            </View>

            <View style={List.buttons}>

                <Button 
                style={{...List.button, marginLeft:8}}
                labelStyle={{fontSize:16,color:"#FFF", lineHeight:30}}
                uppercase={false} 
                mode="contained" 
                icon={()=><Icon name="send-outline" size={20} color="#fff" />}
                onPress={()=> navigation.navigate('TransferScreen') }>Transferir</Button>
            </View>
    </>
  )
}

const List = StyleSheet.create({
    safeArea:{
        marginBottom:25
    },
    button:{
        backgroundColor:"#00953a",
        marginBottom:40,
        flex:1,
        height:50,
        lineHeight:50,
       
    },
    buttons:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
        position:'absolute',
        bottom:-30,
    },
    Container:{
        height:'100%',
        padding:20,
        backgroundColor:'#fff'
    },
    ButtonName:{
    }
});