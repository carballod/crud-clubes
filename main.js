import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('prueba');
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
