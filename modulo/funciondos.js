// ====== EJERCICIO #2 ======


// funcion para validar el acceso

export const validarAcceso = function(edad, contraseñaAcceso){
    const edadMinima = 18;
    const contraseñaUnica = "1234";

    if (edad>= edadMinima && contraseñaUnica === contraseñaAcceso){
        return "Bienvenido";
    }else{
        return "Incorrecto, acceso denegado";
    }
}