const Department = require('../models/Department');


exports.addDepartment = async (req, res) => {
  try {
    const dept = await Department.create({ name: req.body.name });
    res.status(201).json({ message: 'Department added', data: dept });
  } catch (err) {
    res.status(500).json({ message: 'Error', error: err.message });
  }
};


