import User from "../models/user.model.js";
import Conversation from "../models/conversation.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedUserId },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUserConversations = async (req, res) => {
  try {
    const userId = req.params.userId;
    const conversations = await Conversation.find({
      participants: userId,
    }).populate("participants", "-password");
    const filteredConversations = conversations.map((conversation) => {
      const otherParticipant = conversation.participants.filter(
        (participant) => participant._id.toString() !== userId,
      )[0];
      return {
        _id: conversation._id,
        participant: otherParticipant,
        createdAt: conversation.createdAt,
        updatedAt: conversation.updatedAt,
      };
    });

    res.status(200).json(filteredConversations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
