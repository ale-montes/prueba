import express from 'express';

const app = express();

// Configuración del puerto
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});