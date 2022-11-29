const express =require('express')
const router =express.Router()

const mongoose =require('mongoose')
const eschema =mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    apellido: String,
    telefono:String,
    cargo:String,
    contrasena:String,
    email:String,
    fecha:String,
    idusuario:String
})

const ModeloUsuario =mongoose.model('usuario', eschemausuario)
module.exports= router

router.post('/agregarUsuario',(req,res)=>{
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        apellido:req.body.apellido,
        telefono:req.body.telefono,
        cargo:req.body.cargo,
        contrasena:req.body.contrasena,
        email:req.body.email,
        fecha:req.body.fecha,
        idusuario:req.body.idusuario

    })
    nuevousuario.save(function (err) {
        if(!err){
            res.send('usuario agregado correctamente')
        }else{
            res.send(err)
        }
        
    })
})


router.post('/obtenerusuarios', (req,res)=>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)   
}})
})

router.post('/obtenerdatausuario', (req,res)=>{
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)   
}})
})

router.post('/actualizausuario',(req,res)=>{
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario},{
        nombre: req.body.nombre,
        apellido:req.body.apellido,
        telefono:req.body.telefono,
        cargo:req.body.cargo,
        contrasena:req.body.contrasena,
        email:req.body.email,
        fecha:req.body.fecha
    }, (err)=>{
        if(!err){
            res.send('usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})
router.post('/borrarusuario',(req,res)=>{
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err)=>{
        if(!err){
            alert('usuario eliminado correctamente')
        }else{
            res.send(err)
        }
    })
})