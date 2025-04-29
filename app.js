require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Configurações
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Conexão MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.log('Erro ao conectar no MongoDB:', err));

// Importar Rotas
const livroRoutes = require('./routes/livroRoutes');

// Usar Rotas
app.use('/livros', livroRoutes);

// Página Inicial
app.get('/', (req, res) => {
  res.send('Bem vindo à Biblioteca!');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
