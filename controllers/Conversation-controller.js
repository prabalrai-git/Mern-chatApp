const Conversation = require("../models/Conversation");
const { StatusCodes } = require("http-status-codes");

const addNewConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;
  const newConversation = new Conversation({
    members: [senderId, receiverId],
  });
  try {
    const addedConversation = await newConversation.save();
    res.status(StatusCodes.CREATED).json(addedConversation);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong" });
  }
};

const getAllConversations = async (req, res) => {

  const { userId } = req.params;
try {
  
} catch (error) {
  
}
};
module.exports = { addNewConversation, getAllConversations };
