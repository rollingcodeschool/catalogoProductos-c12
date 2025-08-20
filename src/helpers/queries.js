// GET
const urlProductos = import.meta.env.VITE_API_PRODUCTOS

export const listarProductos = async()=>{
    try{
        const respuesta = await fetch(urlProductos)
        return respuesta
    }catch(error){
        console.error(error)
        return null
    }
}
export const obtenerProducto = async(id)=>{
    try{
        const respuesta = await fetch(urlProductos+`/${id}`)
        return respuesta
    }catch(error){
        console.error(error)
        return null
    }
}
// post
export const crearProducto = async(productoNuevo)=>{
    try{
        const respuesta = await fetch(urlProductos,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoNuevo)
        })
        return respuesta
    }catch(error){
        console.error(error)
        return null
    }
}
export const borrarProducto = async(id)=>{
    try{
        const respuesta = await fetch(urlProductos+`/${id}`,{
            method: 'DELETE'
        })
        return respuesta
    }catch(error){
        console.error(error)
        return null
    }
}
