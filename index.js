//Se crea la aplicación con express 
const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();


//Se extrae el puerto del archivo .env
const port = process.env.PUERTO;
console.log(port);


// Manejar solicitudes GET a la raíz
// Middleware para servir archivos estáticos desde los directorios 'images', 'scrips', y 'styles'

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/scrips', express.static(path.join(__dirname, 'scrips')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Manejar solicitudes GET para archivos HTML
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

app.get('/index.html', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

app.get('/login.html', (req, res) => {
  const filePath = path.join(__dirname, 'login.html');
  res.sendFile(filePath);
});

app.get('/contacto.html', (req, res) => {
  const filePath = path.join(__dirname, 'contacto.html');
  res.sendFile(filePath);
});

app.get('/productos.html', (req, res) => {
  const filePath = path.join(__dirname, 'productos.html');
  res.sendFile(filePath);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});