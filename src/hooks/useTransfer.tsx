import React , {useState} from 'react'
import { Transferencia } from '../interfaces/interfaces';
import { useForm } from './useForm';
import { useNavigation } from '@react-navigation/native';


export const useTransfer = () => {

    const [loader, setLoader] = useState(false);

    const navigation = useNavigation();

    const [message, setMessage] = useState({
        type:null,
        mensaje:'',
        data:null
    })
  
      const verifyNumber = (number:any) => {
        
          return parseInt(number);
      }
  
      const verifyAmount = (amount:any) => {
  
          return parseFloat(amount) || 0;
      }
  
      const initialState = {
          celular:'930299310',
          monto:'11.20',
          nota:'',
      }
  
      const { form, celular, monto, nota, onChange } = useForm(initialState);
  
      const transferir = async ()=>{

          if(celular.length == 0 || celular == '' || parseInt(celular) > 999999999){
            setMessage({
                ...message,
                mensaje: 'Debe de ingresar un numero de celular valido'
            });
            return false;
          }
          else{
            setMessage({
                ...message,
                mensaje: ''
            });
          }
  
          if(verifyAmount(monto) <= 0 || isNaN(verifyAmount(monto))){
  
            setMessage({
                ...message,
                mensaje: 'Debe de añadir un monto de transferencia'
            });

            return false;
          } else{
            setMessage({
                ...message,
                mensaje: ''
            });
          }

          setLoader(true);
  
          try {

            setTimeout( async () => {
                const response  = await fetch('https://transfer-project-313f8.web.app/operacion.json');
                const data = await response.json() as Transferencia;
                
                if(data.mensaje == 'Transferencia exitosa'){
                    setLoader(false);
                    navigation.navigate('SuccessScreen',{
                        mensaje: data.mensaje,
                        operacion: data.operacion,
                        nota,
                        monto
                    });
                }
                
            }, 1500);
  
          } catch (error:any) {
            setLoader(false);
           throw new Error(error);
          }
      }
  

  return {
    transferir,
    verifyNumber,
    verifyAmount,
    onChange,
    loader,
    ...message,
    ...form,
  }
}
