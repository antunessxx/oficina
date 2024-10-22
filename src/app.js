import express from 'express';
import connectDB from './config/db.js'
import workshopRouter from './router/workshopRouter.js'
import vehicleRouter from './router/vehicleRouter.js'
import maintenanceRouter from './router/maintenanceRouter.js'



const app = express();

app.use(express.json());

app.use('/workshop',workshopRouter);
app.use('/vehicle',vehicleRouter );
app.use('/maintenance',maintenanceRouter )

app.listen(3000,() => console.log('Servidor rodando na porta 3000'));
