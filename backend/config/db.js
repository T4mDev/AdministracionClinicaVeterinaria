import mongoose from 'mongoose';

const conectarDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      family: 4 // Ayuda a resolver más rápido en Windows
    });

    console.log(`MongoDB conectado en: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error al conectar MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;