



// Abrir HTTP (metodo,url)

// CRUD - Metodos HTTP
//Create - POST
//read - GET
//update - PUT/PATCH
//Delete - DELETE


//Fetch API

const url = 'http://localhost:3000/perfil'
const listaClientes = () => fetch(url).then(respuesta => respuesta.json())

const crearCliente = (nombre, email)=>{
  return fetch(url,{
    method:'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({nombre:nombre, email:email, id: uuid.v4()})
  })
}

const eliminarCliente = (id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:'DELETE'
  })
}

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json())
}

const actualizarCliente = (nombre,email,id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({nombre,email}),
  })
    .then((respuesta)=>respuesta)
    .catch((err)=>console.log(err))
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente

}

