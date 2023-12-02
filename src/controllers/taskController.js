// Static list of tasks
const tasks = [
    { id: 1, name: 'Task 1', deadline: '2023-01-01' },
    { id: 2, name: 'Task 2', deadline: '2023-02-01' },
    { id: 3, name: 'Task 3', deadline: '2023-03-01' },
  ];
  

/**
 * Retrieves a static list of all tasks.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - Returns a JSON response containing the list of tasks or an error message if tasks are not found.
 * @throws {Error} - Throws an error if there is an issue processing the request.
 */
const getAllTasks = (req, res) => {
  if (tasks) {
    res.status(200).json(tasks);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

/**
 * Retrieves a specific task by its ID.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - Returns a JSON response containing the task with the specified ID or an error message if the task is not found.
 * @throws {Error} - Throws an error if there is an issue processing the request.
 */
const getTaskById = (req, res) => {
  const taskId = parseInt(req.params.id);

  // Find the task with the given id
  const task = tasks.find((t) => t.id === taskId);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
};
