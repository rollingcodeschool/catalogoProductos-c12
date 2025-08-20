// GET
const urlProductos = import.meta.env.VITE_API_PRODUCTOS

export const listarProductos = async()=>{
    try{
        console.log(urlProductos)
        const respuesta = await fetch(urlProductos)
        return respuesta
    }catch(error){
        console.error(error)
        return null
    }
}

// post

