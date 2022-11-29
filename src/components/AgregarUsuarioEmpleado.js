import React, { useState } from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
function AgregarUsuario() {
    //Hooks
    const[nombre, setNombre]=useState('')
    const[apellido, setApellido]=useState('')
    const[telefono, setTelefono]=useState('')
    const[cargo, setCargo]=useState('')
    const[contrasena, setContrasena]=useState('')
    const[email, setEmail]=useState('')
    const[fecha, setFecha]=useState('')

    function agregarUsuario(){
            var usuario={
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                cargo: cargo,
                contrasena: contrasena,
                email: email,
                fecha: fecha,
                idusuario: uniquid()
            }
            console.log(usuario)

            axios.post('/api/usuario/agregarusuario', usuario)
            .then(res => {
                Swal.fire('Felicidades', 'El usuario se creo con exito')
            })
            .then(err => {console.log(err)})

    }
    return (
  <div className="bg-gradient-primary">
      <div className="container center">
          <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="p-5">
                              <div className="text-center">
                                  <h1 className="h4 text-gray-900 mb-4">Crear usuario</h1>
                              </div>
                              <form className="user">
                                  <div className="form-group row">
                                      <div className="col-sm-6 mb-3 mb-sm-0">
                                          <input type="text" className="form-control form-control-user" 
                                              placeholder="Nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
                                      </div>
                                      <div className="col-sm-6">
                                          <input type="text" className="form-control form-control-user" 
                                              placeholder="Apellido" value={apellido} onChange={(e)=>{setApellido(e.target.value)}}/>
                                      </div>
                                  </div>
                                  <div className="form-group row">
                                      <div className="col-sm-6 mb-3 mb-sm-0">
                                          <input type="text" className="form-control form-control-user"
                                               placeholder="Teléfono" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}/>
                                      </div>
                                      <div className="col-sm-6">
                                          <input type="text" className="form-control form-control-user"
                                               placeholder="Cargo" value={cargo} onChange={(e)=>{setCargo(e.target.value)}}/>
                                      </div>
                                  </div>
                                  <div className="form-group row">
                                      <div className="col-sm-6 mb-3 mb-sm-0">
                                          <input type="text" className="form-control form-control-user"
                                               placeholder="Contraseña" value={contrasena} onChange={(e)=>{setContrasena(e.target.value)}}/>
                                      </div>
                                      <div className="col-sm-6">
                                          <input type="email" className="form-control form-control-user"
                                              placeholder="Email"value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                      </div>
                                  </div>
                                  <input type="dateTime-local" className="form-control form-control-user"
                                   placeholder="fecha" value={fecha} onChange={(e)=>{setFecha(e.target.value)}}/>
                                  <hr/>
                                  
                                  <button onClick={agregarUsuario} className="btn btn-primary btn-user btn-block">Crear Usuario</button>
                                  <hr/>
                              </form>
                              <hr/>
                             
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
      </div>
  
  </div>);
  }
  
  export default AgregarUsuario