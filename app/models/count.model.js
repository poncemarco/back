const mongoose = require('mongoose');

// Esquema de Servicio
const serviceSchema = new mongoose.Schema({
  name:{ 
    type: String,
    required:true
 },
});

const Servicio = mongoose.model('Servicio', serviceSchema);

// Esquema de Usuario
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  // ...otros campos de usuario
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Esquema de Grupo con referencias a Usuario y Servicio
const grupoSchema = new mongoose.Schema({
  nombre: String,
  usuarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
  servicios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Servicio' }],
  // ...otros campos de grupo
});

const Grupo = mongoose.model('Grupo', grupoSchema);
