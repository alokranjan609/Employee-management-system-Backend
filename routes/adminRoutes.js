const express = require('express');
const router = express.Router();
const {
  addEmployee, getAllEmployees, updateEmployee, deleteEmployee
} = require('../controllers/employeeController');

const {
  addDepartment
} = require('../controllers/orgController');

const { verifyToken, restrictTo } = require('../middlewares/auth');





// HR and Admin can add employees
router.post('/employees', verifyToken, restrictTo('admin', 'hr'), addEmployee);

// Admin and Manager can view all employees
router.get('/employees', verifyToken, restrictTo('admin', 'manager'), getAllEmployees);

// Only Admin can edit and delete employees
router.put('/employees/:id', verifyToken, restrictTo('admin'), updateEmployee);
router.delete('/employees/:id', verifyToken, restrictTo('admin'), deleteEmployee);



// Department and Location
router.post('/departments', verifyToken, restrictTo('admin'), addDepartment);

module.exports = router;
