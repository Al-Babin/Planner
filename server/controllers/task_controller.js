import db from '../../db.js';
import queries from '../queries.js';

class taskController {
    async createTask(req, res) {
        const { name, categoryId, period_id } = req.body;
        const newTask = await db.query(queries.insertTask, [name, categoryId, period_id])
        res.json(newTask.rows[0])
    }
    async getAllTasks(req, res) {
        const tasks = await db.query(queries.getAllTasks)
        res.json(tasks.rows)
    }
    async getTasksByCategory(req, res) {
        const id = req.query.id
        const tasks = await db.query(queries.getTasksByCategory, [id])
        res.json(tasks.rows)
    }

    async deleteTask(req, res) {
        const id = req.params.id;
        const task = await db.query(queries.deleteTask,[id]);
        res.json(task.rows[0])
    }

    async deleteAllTaskInCategory(req, res) {
        const category_id = req.params.id;
        const task = await db.query(queries.deleteAllTaskInCategory,[category_id]);
        res.json(task.rows[0])
    }

    async updateTask(req, res) {
        const { name, is_checked, id } = req.body;
        const task = await db.query(queries.updateTask,[name, is_checked, id]);
        res.json(task.rows[0])
    }
}

export default new taskController();