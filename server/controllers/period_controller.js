import db from '../../db.js';
import queries from '../queries.js';

class periodController {
    async createPeriod(req, res) {
        const { is_selected = false, date_low, date_high } = req.body;
        const newPeriod = await db.query(queries.insertPeriod, [is_selected, date_low, date_high])
        res.json(newPeriod.rows[0])
    }
    async getAllPeriods(req, res) {
        const periods = await db.query(queries.getAllPeriods)
        res.json(periods.rows)
    }

    async deletePeriod(req, res) {
        const id = req.params.id;
        const period = await db.query(queries.deletePeriod,[id]);
        res.json(period.rows[0])
    }

    async updatePeriod(req, res) {
        const { date_low, date_high, id, is_selected } = req.body;
        const period = await db.query(queries.updatePeriod,[date_low, date_high, is_selected, id]);
        res.json(period.rows[0])
    }

    async setSelectedPeriod(req, res) {
        const id = req.params.id;
        const period = await db.query(queries.setSelectedPeriod,[id]);
        res.json(period.rows)
    }
}

export default new periodController();