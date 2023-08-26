import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

dotenv.config();
const port = 5000 || process.env.PORT;
const app = express();

// connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);


app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));