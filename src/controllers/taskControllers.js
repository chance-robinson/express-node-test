// Static list of tasks
const tasks = [
    { id: 1, name: 'Task 1', deadline: '2023-01-01' },
    { id: 2, name: 'Task 2', deadline: '2023-02-01' },
    { id: 3, name: 'Task 3', deadline: '2023-03-01' },
  ];
  

// GET /tasks: Returns a static list of all tasks
const getAllTasks = (req, res) => {
  if (tasks) {
    res.status(200).json(tasks);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

// GET /tasks/:id: Returns a specific task by id
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
