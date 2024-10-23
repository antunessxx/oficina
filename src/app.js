import express from 'express';
import connectDB from './config/db.js'
import workshopRouter from './router/workshopRouter.js'
import vehicleRouter from './router/vehicleRouter.js'
import maintenanceRouter from './router/maintenanceRouter.js'

connectDB()

const app = express();

app.use(express.json());

app.use('/workshop',workshopRouter);
app.use('/vehicle',vehicleRouter );
app.use('/maintenance',maintenanceRouter )

app.listen(process.env.PORT,() => console.log('Servidor rodando na porta 3000'));
