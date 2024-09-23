const Sex = require("../models/sex.js");

const createSex = async (req, res) => {
  try {
    const sex = await Sex.create(req.body);
    res.status(201).json(sex);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAllSex = async (req, res) => {
  try {
    const sex= await Sex.findAll();
    res.status(200).json(sex);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateSex = async (req, res) => {
    try {
      const {nameSex} = req.body;
      const sex = await Sex.findByPk(req.params.id);
  
      if (sex) {
        sex.nameSex=nameSex
  
        await sex.save();
        res.status(200).json(sex);
      } else {
        res.status(404).json({ message: 'sex not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
const deleteSex = async (req, res) => {
    try {
      const sex = await  Sex.findByPk(req.params.id);
  
      if (sex) {
        await sex.destroy();
        res.status(200).json({ message: 'sex deleted successfully' });
      } else {
        res.status(404).json({ message: 'sex not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };




module.exports = {
  createSex,
  getAllSex,
  updateSex,
  deleteSex
};
