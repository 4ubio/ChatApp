import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { app, server } from './socket/socket.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(cors())
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV !== "development") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
	});
}

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});