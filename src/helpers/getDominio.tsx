
export const infoBasic = {
    dominio : 'erp20x.beta.net.pe',
    registrar: 'usuario-registro',
    recoveryPassword : 'usuario-recuperar-password',  
    login : 'usuario-login',  
    terminosYcondiciones : 'usuario-registro-terminos',  
}

export const menuEnlaces = {
    categorias : 'categorias',
    promociones : 'promociones',
    usuarioMiCuenta: 'usuario-perfil',
    usuarioDirecciones : 'usuario-direccion',
    usuarioPasswordChange: 'usuario-acceso',
    usuarioHistorial: 'usuario-historial',
    cerrarSesion : 'cerrar-sesion'
}

const urlDominio = `https://${infoBasic.dominio}/modulos/mod_login/api.php`;

export const logo = `${urlDominio}?action=logo`;

export default urlDominio;