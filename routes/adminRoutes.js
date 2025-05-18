const express = require('express');
const router = express.Router();
const {
  addEmployee, getAllEmployees, updateEmployee, deleteEmployee
} = require('../controllers/employeeController');

const {
  addDepartment
} = require('../controllers/orgController');

const { verifyToken, restrictTo } = require('../middlewares/auth');

// Protect all routes for admin only
router.use(verifyToken, restrictTo('admin'));

// Employee management
router.post('/employees', addEmployee);
router.get('/employees', getAllEmployees);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

// Department and Location
router.post('/departments', addDepartment);

module.exports = router;
