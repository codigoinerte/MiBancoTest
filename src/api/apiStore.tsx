import { apiStoreProps } from "../interfaces/interfaces";

export const apiStore = async ({dominio, action, body={}, method='POST'}:apiStoreProps)=>{

  const url = `https://${dominio}/modulos/mod_login/api.php?action=${action}`;
  const options = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  return await fetch(url, options);

}