const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/CrudUsuarios');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexion correcta a MongoDB')})
objetobd.on('error', ()=>{console.log('Error en la Conexion  a MongoDB')})

module.exports = mongoose