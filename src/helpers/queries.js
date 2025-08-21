const urlproductos = import.meta.env.VITE_API_PRODUCTOS

console.log(urlproductos);

export const leerProductos = async () => {
    try{
        const respuesta = await fetch(urlproductos)
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
};

export const obtenerProductoPorID = async (id) => {
    try{
        const respuesta = await fetch(urlproductos+ `/${id}`)
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
};

export const crearProducto = async (productoNuevo) => {
    try{
        const respuesta = await fetch(urlproductos,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoNuevo)
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
};

export const editarProducto = async (productoEditado, id) => {
    try{
        const respuesta = await fetch(urlproductos+ `/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoEditado)
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
};
export const borrarProductoPorID = async (id) => {
    try{
        const respuesta = await fetch(urlproductos+ `/${id}`,{
            method: 'DELETE',
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
};