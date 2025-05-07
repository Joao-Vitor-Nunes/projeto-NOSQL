const Genero = require('../models/genero');

exports.criar = async (req, res) => {
  try {
    const genero = await Genero.create(req.body);
    res.status(201).json(genero);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.status(200).json(generos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
