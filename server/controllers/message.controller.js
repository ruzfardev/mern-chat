import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all: [id, senderId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [id, senderId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId: id,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    Promise.all([newMessage.save(), conversation.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userChatId } = req.params;
    const senderId = req.user._id;
    const conversation =
      await Conversation.findById(userChatId).populate("messages");
    if (!conversation) {
      return res.status(404).json({
        message: "No conversation found with this user",
      });
    }
    const messages = await Message.find({
      _id: { $in: conversation.messages },
    }).populate("senderId", "userName email avatar");
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
