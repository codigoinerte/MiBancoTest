import React from 'react';
import { DataTable, Button } from 'react-native-paper';
import { Brand, ContainerScreens, Loader } from '../../components';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useList } from '../../hooks';

interface Props extends DrawerScreenProps<any, any>{};

export const ListScreen = ({ navigation }: Props ) => {

  const { data, loader } = useList();

  if(loader) return <Loader/>;
  
    
  return (
    <>
        <ContainerScreens>

            <Brand />

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Cliente</DataTable.Title>
                    <DataTable.Title numeric>Monto</DataTable.Title>
                    <DataTable.Title numeric>Fecha de operación</DataTable.Title>
                </DataTable.Header>

                {
                    data.map(({cliente, monto, fechaoperacion}) => 
                        (<DataTable.Row key={`${cliente}${fechaoperacion}${monto}`} >
                            <DataTable.Cell>{cliente}</DataTable.Cell>
                            <DataTable.Cell numeric>{monto}</DataTable.Cell>
                            <DataTable.Cell numeric>{fechaoperacion}</DataTable.Cell>
                        </DataTable.Row>)
                    )
                }
                
            </DataTable>

            <Button 
            style={{backgroundColor:"#00953a", marginBottom:40}}
            labelStyle={{fontSize:16,color:"#FFF"}}
            uppercase={false} 
            mode="contained" 
            onPress={()=> navigation.navigate('TransferScreen') }>Transferir</Button>

        </ContainerScreens>                
    </>
  )
}
