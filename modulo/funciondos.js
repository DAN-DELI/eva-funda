// funcion para validar el acceso

export const validarAcceso = function(edad, contraseñaAcceso){
    const edadMinima = 18;
    const contraseñaUnica = "arrozconleche";

    if (edad>= edadMinima && contraseñaUnica === contraseñaAcceso){
        return "Bienvenido";
    }else{
        return "Incorrecto, acceso denegado";
    }
}