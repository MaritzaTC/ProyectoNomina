import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UsuarioIndividual from './UsuarioIndividual'
function ListaUsuarios(){

    const[datausuarios, setdatausuario]=useState([])
    useEffect(()=>{
        axios.get('api/usuario/obtenerusuarios').then(res=>{
            console.log(res)
            setdatausuario(res.data)
        }).catch(err=> {
            console.log(err)
        })
    },[])
    //Mapear lista
    const listausuarios= datausuarios.map(usuario=>{
        return(
            <div>
                 <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    })
    return(
        <div>
            <h1>Buscar</h1>
        </div>
    )}
export default ListaUsuarios