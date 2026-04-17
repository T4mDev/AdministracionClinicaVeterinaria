// src/index.js 
import express from 'express'; 
import conectarDB from './config/db.js';

//Conectar a la base de datos
conectarDB();
 
const app  = express(); 
const PORT = 3000; 
 
// Middleware para parsear JSON 
app.use(express.json()); 
 
// Ruta de prueba
app.get('/', (req, res) => { 
  res.json({ 
    mensaje: 'Servidor funcionando correctamente 🚀', 
    base_de_datos: 'MongoDB Atlas conectado', 
  }); 
 });
 
// Iniciar el servidor 
app.listen(PORT, () => { 
  console.log(`Servidor Ejecutándose en http://localhost:${PORT}`); 
}); 