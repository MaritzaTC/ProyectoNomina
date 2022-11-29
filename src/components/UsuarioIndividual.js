/* eslint-disable no-unused-expressions */
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function UsuarioIndividual({usuario}) {
    const navegar = useNavigate()
    //para animaciones de scroll al bajar
    useEffect(()=>{
        AOS.init
    },[])
    function borrarusuario(idusuario){
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario})
            .then(res => {
                console.log(res.data)
                alert(res.data)
                navegar(0)
            })
            .catch(err => {console.log(err)})
    }
    return (
        <div className='container'>
            <div className="row">
                <div className='col-sm-6 offset-3' data-aos="flip-right">
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.idusuario}</li>
                        <li className='list-group-item'>{usuario.nombre}</li>
                        <li className='list-group-item'>{usuario.apellido}</li>
                        <li className='list-group-item'>{usuario.telefono}</li>
                        <li className='list-group-item'>{usuario.cargo}</li>
                        <li className='list-group-item'>{usuario.contraseña}</li>
                        <li className='list-group-item'>{usuario.email}</li>
                        <li className='list-group-item'>{usuario.fecha}</li>
                    </ul>
                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className='btn btn bg-success'>Editar</li></Link>
                    <button className='btn btn-success'>Editar</button>
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=>{borrarusuario(usuario.idusuario)}}>Eliminar</button>
                    <hr className='mt-4'></hr>
                </div>

            </div>

        </div>
    )
}
export default UsuarioIndividual