const Perfil = require("../models/perfil.js");

const createPerfil = async (req, res) => {
  try {
    const perfil = await Perfil.create(req.body);
    res.status(201).json(perfil);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAllPerfil = async (req, res) => {
  try {
    const perfil= await Perfil.findAll();
    res.status(200).json(categorys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





module.exports = {
  createPerfil,
  getAllPerfil
};
