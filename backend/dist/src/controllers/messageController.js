import prisma from "../db/prisma.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.userId;
        let conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
                    hasEvery: [senderId, receiverId]
                }
            }
        });
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participantIds: {
                        set: [senderId, receiverId]
                    }
                }
            });
        }
        const newMessage = await prisma.message.create({
            data: {
                senderId,
                body: message,
                conversationId: conversation.id
            }
        });
        await prisma.conversation.update({
            where: { id: conversation.id },
            data: {
                messageIds: {
                    push: newMessage.id,
                },
            },
        });
        /*if(newMessage){
         conversation = await prisma.conversation.update({
           where:{
             id : conversation.id
           },
           data:{
             messages : {
               connect :{
                 id : newMessage.id
               }
             }
           }
         })
        }*/
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        res.status(201).json(newMessage);
    }
    catch (error) {
        console.log("Error in sendMessage: ", error.message);
        res.status(400).json({ error: "Internal Server error" });
    }
};
export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.userId;
        const conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
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
        });
        if (!conversation) {
            res.status(200).json({ messages: [] });
            return;
        }
        res.status(200).json({ messages: conversation.messages });
    }
    catch (error) {
        console.log("Error in getMessages : " + error.message);
        res.status(400).json({ message: "Internal Server Error" });
    }
};
export const getUsersInSidebar = async (req, res) => {
    try {
        const currUser = req.userId;
        const users = await prisma.user.findMany({
            where: {
                id: {
                    not: currUser
                }
            },
            select: {
                id: true,
                fullName: true,
                profilePic: true
            }
        });
        res.status(200).json(users);
    }
    catch (error) {
        console.log("Error in getUsersInSidebar : " + error.message);
        res.status(400).json({ error: "Internal Server Error" });
    }
};
