import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import categoryRouter from './routes/category_routes.js';
import taskRouter from './routes/task_routes.js';
import periodRouter from './routes/period_routes.js';

const app = express();
const port = 3000;


// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', categoryRouter)
app.use('/api', taskRouter)
app.use('/api', periodRouter)

app.listen(port, () => {
    console.log(`[OK] Server is running on localhost:${port}`);
})
