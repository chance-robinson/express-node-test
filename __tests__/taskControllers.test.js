const { getAllTasks, getTaskById } = require('../src/controllers/taskController');

describe('getAllTasks', () => {
  it('should return a static list of tasks', () => {
    const req = {};
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    getAllTasks(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      { id: 1, name: 'Task 1', deadline: '2023-01-01' },
      { id: 2, name: 'Task 2', deadline: '2023-02-01' },
      { id: 3, name: 'Task 3', deadline: '2023-03-01' },
    ]);
  });
});

describe('getTaskById', () => {
  it('should return a specific task by ID', () => {
    const req = { params: { id: '2' } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    getTaskById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 2, name: 'Task 2', deadline: '2023-02-01' });
  });

  it('should return a 404 error for an invalid task ID', () => {
    const req = { params: { id: '5' } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    getTaskById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Task not found' });
  });
});
