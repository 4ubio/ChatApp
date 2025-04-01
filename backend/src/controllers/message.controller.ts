import { Request, Response } from "express";
import prisma from "../db/prisma.js";

export const sendMessage = async (req: Request, res: Response): Promise<any> => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user.id;

        //Find conversation between sender and receiver
        let conversation = await prisma.conversation.findFirst({
            where: {
                participantsIds: {
                    hasEvery: [senderId, receiverId]
                }
            }
        });

        //If conversation does not exist, create a new one
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participantsIds: {
                        set: [senderId, receiverId]
                    }
                }
            });
        };

        //Create a new message
        const newMessage = await prisma.message.create({
            data: {
                senderId,
                body: message,
                conversationId: conversation.id
            }
        });

        //Update conversation with the new message
        if (newMessage) {
            conversation = await prisma.conversation.update({
                where: {
                    id: conversation.id
                }, 
                data: {
                    messages: {
                        connect: {
                            id: newMessage.id
                        }
                    }
                }
            })
        }

        //Socket.io will go here
        res.status(201).json(newMessage);

    } catch (error: any) {
        console.error("Error sending message:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getMessages = async (req: Request, res: Response): Promise<any> => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user.id;

        const conversation = await prisma.conversation.findFirst({
            where: {
                participantsIds: {
                    hasEvery: [senderId, userToChatId]
                }
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            }
        })

        if (!conversation) {
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);
    } catch (error: any) {
        console.error("Error getting messages:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getUsersForSidebar = async (req: Request, res: Response): Promise<any> => {
    try {
        const authUserId = req.user.id;

        const users = await prisma.user.findMany({
            where: {
                id: {
                    not: authUserId
                }
            },
            select: {
                id: true,
                fullName: true,
                profilePic: true,
            }
        });

        res.status(200).json(users);
    } catch (error) {
        console.error("Error getting users for sidebar:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}