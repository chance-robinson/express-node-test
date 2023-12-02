const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// GET /tasks
router.get('/', taskController.getAllTasks);

// GET /tasks/:id
router.get('/:id', taskController.getTaskById);

module.exports = router;