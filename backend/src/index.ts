import express from 'express';
import cors from 'cors'
import dotenv from "dotenv";
import { connectDB } from './db/mongodb.connection';
import { uploadsPath } from './middlewares/upload.multer';
import EstatesRoutes from './routes/estate.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(uploadsPath))
app.use('/estates', EstatesRoutes)

app.listen(PORT, () => {
  console.log(`app running in port: ${PORT}`);
  connectDB();
})