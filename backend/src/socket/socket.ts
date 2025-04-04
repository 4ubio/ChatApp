import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

export const getReceiverSocketId = (receiverId: string) => { return userSocketMap[receiverId];};
const userSocketMap: { [key: string]: string } = {};

// Set up a Socket.IO server that listens for incoming connections.
// When a user connects, log the connection and store the user's socket ID in a map.
// When a user disconnects, log the disconnection and remove the user's socket ID from the map.
io.on("connection", (socket) => {
    console.log("A user connected", socket.id);
    const userId = socket.handshake.query.userId as string;
    if (userId) userSocketMap[userId] = socket.id;

    // io.emit() is used to send events to all connected clients.
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    //socket.on() is used to listen to the events. Can be used both on the server and client side.
    socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };