const User = require('../models/User');

// POST /employees
exports.addEmployee = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) return res.status(400).json({ message: 'Email already exists' });

    const newEmployee = await User.create({ ...req.body, role: 'employee' });
    res.status(201).json({ message: 'Employee added', data: newEmployee });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// GET /employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: 'employee' }).select('-password');
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// PUT /employees/:id
exports.updateEmployee = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select('-password');

    if (!updated) return res.status(404).json({ message: 'Employee not found' });

    res.json({ message: 'Employee updated', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// DELETE /employees/:id
exports.deleteEmployee = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


// PUT /employees/me
exports.updateOwnProfile = async (req, res) => {
  const allowedUpdates = ['name', 'department', 'location'];
  const updates = {};

  // Pick only allowed fields
  for (let key of allowedUpdates) {
    if (req.body[key]) updates[key] = req.body[key];
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
      runValidators: true
    }).select('-password');

    res.json({
      message: 'Profile updated successfully',
      data: updatedUser
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


// GET /employees/me
exports.getOwnProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'Profile fetched successfully', data: user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};