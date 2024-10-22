import mongoose from 'mongoose';

const connectDB = async () => 
    mongoose
        .connect (`${process.env.URI}`) 
        .then(() => console.log('Connected to MongoDB')) 
        .catch((erro) => console.error("Erro ao conectar ao mongo:",error)); 
;
connectDB();

export default mongoose;