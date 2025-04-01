import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config();
const app = express();

app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing application/json data

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});