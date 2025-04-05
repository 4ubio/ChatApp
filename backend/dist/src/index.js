import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { app, server } from './socket/socket.js';
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json()); // for parsing application/json data
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
// Todo: Configure this server for deployment
