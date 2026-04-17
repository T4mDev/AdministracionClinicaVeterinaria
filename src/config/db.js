/ src/config/db.js 
import mongoose from 'mongoose'; 
 
const conectarDB = async () => { 
  try { 
    const conn = await mongoose.connect(process.env.MONGODB_URI); 
    console.log(`MongoDB conectado: ${conn.connection.host}`); 
  } catch (error) { 
    console.error(`Error al conectar MongoDB: ${error.message}`); 
    process.exit(1); // Terminar el proceso con error 
  } 
}; 
 
export default conectarDB; 