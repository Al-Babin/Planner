const queries =  {
    insertCategory: 'INSERT INTO categories (name, period_id) VALUES ($1, $2) RETURNING *',
    getCategories: 'SELECT categories.category_id, categories.name, categories.period_id FROM categories INNER JOIN periods ON categories.period_id = periods.id WHERE periods.is_selected = true',
    getCategory: 'SELECT * FROM categories WHERE id = $1 ',
    updateCategory: 'UPDATE categories set name = $1 WHERE category_id = $2 RETURNING *',
    deleteCategory: 'DELETE FROM categories WHERE category_id = $1',

    insertTask: 'INSERT INTO tasks (name, category_id, period_id) VALUES ($1, $2, $3) RETURNING *',
    getTasksByCategory: 'SELECT * FROM tasks WHERE category_id = $1',
    getAllTasks: 'SELECT tasks.id, tasks.name, tasks.category_id, tasks.is_checked, tasks.period_id FROM tasks INNER JOIN periods ON tasks.period_id = periods.id WHERE periods.is_selected = true',
    deleteTask: 'DELETE FROM tasks WHERE id = $1',
    deleteAllTaskInCategory: 'DELETE FROM tasks WHERE category_id = $1',
    updateTask: 'UPDATE tasks set name = $1, is_checked = $2 WHERE id = $3 RETURNING *',

    getAllPeriods: 'SELECT * FROM periods',
    insertPeriod: 'INSERT INTO periods (is_selected, date_low, date_high) VALUES ($1, $2, $3) RETURNING *',
    deletePeriod: 'DELETE FROM periods WHERE id = $1 RETURNING *',
    updatePeriod: 'UPDATE periods set date_low = $1, date_high = $2, is_selected = $3  WHERE id = $4 RETURNING *',
    setSelectedPeriod: 'UPDATE periods set is_selected = CASE WHEN id = $1 THEN true ELSE false END RETURNING *',
}

export default queries 