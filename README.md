# Aplicación Web de Administración - Clínica Veterinaria

Aplicación web completa para la administración de una clínica veterinaria desarrollada con el stack **MERN** (MongoDB, Express, React, Node.js).

## 📋 Descripción del Proyecto

Esta es una solución integral para gestionar una clínica veterinaria, permitiendo:

- Registro y autenticación de veterinarios
- Gestión de perfiles de usuario
- Administración de pacientes (mascotas)
- Control de citas y servicios

## 🛠️ Tecnologías Utilizadas

### Backend

- **Node.js** - Runtime de JavaScript
- **Express.js** (v5.2.1) - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** (v9.5.0) - ODM para MongoDB
- **dotenv** (v17.4.2) - Gestión de variables de entorno
- **Nodemon** (v3.1.14) - Herramienta de desarrollo para reiniciar automáticamente

### Frontend

- _En desarrollo_

## 📁 Estructura del Proyecto

```
webappveterinaria/
├── backend/
│   ├── config/
│   │   └── db.js              # Configuración de conexión a MongoDB
│   ├── controllers/
│   │   └── veterinaryController.js  # Lógica de controladores
│   ├── models/
│   │   └── veterinary.js      # Esquema de Mongoose para veterinarios
│   ├── routes/
│   │   └── veterinaryRoutes.js # Definición de rutas de API
│   ├── index.js               # Punto de entrada principal
│   ├── package.json           # Dependencias y scripts
│   └── .env                   # Variables de entorno (no incluido)
├── frontend/
│   └── *En desarrollo*
└── README.md                  # Este archivo
```

## 🚀 Instalación y Configuración

### Requisitos Previos

- Node.js (v14 o superior)
- MongoDB local o Atlas
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone <url-del-repositorio>
cd webappveterinaria
```

2. **Instalar dependencias del backend**

```bash
cd backend
npm install
```

3. **Configurar variables de entorno**

Crear archivo `.env` en la carpeta `backend/`:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/clinica_veterinaria
# O para MongoDB Atlas:
# MONGODB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/clinica_veterinaria
```

4. **Ejecutar el servidor**

En modo desarrollo (con recarga automática):

```bash
npm run dev
```

O en modo producción:

```bash
npm start
```

El servidor estará disponible en `http://localhost:4000`

## 📡 API Endpoints

### Veterinarios

| Método | Ruta                        | Descripción                                                 | Estado           |
| ------ | --------------------------- | ----------------------------------------------------------- | ---------------- |
| POST   | `/api/veterinarios`         | Registrar veterinario (espera JSON con `email`, `password`) | 🔄 En desarrollo |
| POST   | `/api/veterinarios/login`   | Login de veterinario (espera JSON con `email`, `password`)  | 🔄 En desarrollo |
| GET    | `/api/veterinarios/profile` | Obtener perfil de veterinario                               | 🔄 En desarrollo |

_Nota: Los endpoints actualmente retornan objetos JSON con mensajes de prueba (placeholders). La lógica completa de registro, login y manejo de perfiles está en desarrollo._

## 📊 Modelo de Datos

### Veterinary

```javascript
{
  name: String (requerido),
  password: String (requerido),
  email: String (requerido, único),
  phone: String (opcional),
  web: String (opcional),
  token: String (opcional),
  confirm: Boolean (default: false)
}
```

## ⚙️ Configuración de la Base de Datos

El archivo `config/db.js` contiene la configuración de conexión a MongoDB usando Mongoose. Asegúrate de que:

- MongoDB esté ejecutándose
- La URI de conexión sea correcta en `.env`

## 📝 Scripts Disponibles

```bash
# Iniciar en modo desarrollo (con nodemon)
npm run dev

# Iniciar en modo producción
npm start
```

## 🔄 Estado del Proyecto

### Completado

- ✅ Configuración inicial de Express
- ✅ Conexión a MongoDB con Mongoose
- ✅ Estructura de carpetas
- ✅ Modelo de Veterinary
- ✅ Rutas básicas

### En Desarrollo

- 🔄 Lógica de autenticación (registro, login)
- 🔄 Validaciones de entrada
- 🔄 Middleware de autenticación
- 🔄 Rutas de perfiles

### Pendiente

- ⏳ Frontend con React
- ⏳ Modelos de Pacientes (mascotas)
- ⏳ Modelos de Citas
- ⏳ Modelos de Servicios
- ⏳ Autenticación con JWT
- ⏳ Validaciones de email
- ⏳ Tests unitarios

## 👤 Autor

Omar Yesith Tamara Pallares

## 📄 Licencia

ISC

## 📞 Notas de Desarrollo

- El proyecto usa ES Modules (`"type": "module"` en package.json)
- Se recomienda usar Nodemon durante el desarrollo para recarga automática
- La base de datos debe estar configurada antes de iniciar el servidor
