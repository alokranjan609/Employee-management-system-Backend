const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// @desc    Register a new user
// @route   POST /api/auth/register
exports.register = async (req, res) => {
    console.log('Registering user:', req.body); 
  const { name, email, password, role, department, location } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password, role, department, location });
    console.log('Jwt token:', generateToken(user)); // Log the generated token
    
    res.status(201).json({
      message: 'User registered successfully',
      token: generateToken(user)
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    res.json({
      message: 'Login successful',
      token: generateToken(user)
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
