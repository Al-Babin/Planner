import db from '../../db.js';
import queries from '../queries.js';

class CategoryController {
    async createCategory(req, res) {
        const { name, period_id } = req.body;
        const newCategory = await db.query(queries.insertCategory, [name, period_id])
        res.json(newCategory.rows[0])
    }
    async getCategories(req, res) {
        const categories = await db.query(queries.getCategories)
        res.json(categories.rows)
    }

    async getOneCategory(req, res) {
        const id = req.params.id
        const category = await db.query(queries.getCategory, [id])
        res.json(category.rows[0])
    }

    async updateCategory(req, res) {
        const { categoryId, name } = req.body;
        const category = await db.query(queries.updateCategory, [name, categoryId]);
        res.json(category.rows[0])
    }

    async deleteCategory(req, res) {
        const id = req.params.id
        const category = await db.query(queries.deleteCategory, [id])
        res.json(category.rows[0])
    }
}

export default new CategoryController();