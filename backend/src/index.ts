import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config();
const app = express();

app.use(cors())
app.use(express.json()); // for parsing application/json data

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// Todo: Add socket.io to the server
// Todo: Configure this server for deployment