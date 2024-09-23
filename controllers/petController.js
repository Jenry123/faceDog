const Pet = require("../models/Pet.js");

const createPet = async (req, res) => {
  try {
    const Pets = await Pet.create(req.body);
    res.status(201).json(Pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAllPets = async (req, res) => {
  try {
    const Pets= await Pet.findAll();
    res.status(200).json(Pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updatePet = async (req, res) => {
    try {
      const {name,age,idCategory,idSex} = req.body;
      const pet = await Pet.findByPk(req.params.id);
  
      if (pet) {
        pet.name=name
        pet.age=age
        pet.idCategory=idCategory
        pet.idSex=idSex
  
        await pet.save();
        res.status(200).json(pet);
      } else {
        res.status(404).json({ message: 'pet not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
const deletePet = async (req, res) => {
    try {
      const flight = await Fly.findByPk(req.params.id);
  
      if (flight) {
        await flight.destroy();
        res.status(200).json({ message: 'Flight deleted successfully' });
      } else {
        res.status(404).json({ message: 'Flight not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };




module.exports = {
  createPet,
  getAllPets,
  updatePet,
  deletePet
};
