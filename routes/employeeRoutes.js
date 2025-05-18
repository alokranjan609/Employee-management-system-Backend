const express = require('express');
const router = express.Router();
const { verifyToken, restrictTo } = require('../middlewares/auth');
const { updateOwnProfile } = require('../controllers/employeeController');
const { getOwnProfile } = require('../controllers/employeeController');

// Employee can update their own profile
router.put('/me', verifyToken, restrictTo('employee'), updateOwnProfile);

// Employee can get their own profile
router.get('/me', verifyToken, restrictTo('employee'), getOwnProfile);

module.exports = router;


// Employee can get their own profile
