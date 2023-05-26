//nos conectamos a una api publica
//url entrada y salida de datos

const url="https://jsonplaceholder.typicode.com/todos/";
//optener dados                                aca a donde quiero conectarme

async function obtenerTodos(id){//solo me devuelva el id que pida
    //versiones >18 node.js y las menores con bibliotecas
    const respuesta=await fetch(`${url}${id}`);
//me devuelve opgeto y se comvierte a json

    const datos=await respuesta.json();

    //luego hago lo que quiera con los datos
    procesarJson(datos);




}
function procesarJson(dato){
    console.log(dato);
}


//fetch= me devulve una promesa 




