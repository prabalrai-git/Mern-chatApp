const express = require("express");
const {
  addNewConversation,
  getAllConversations,
} = require("../controllers/Conversation-controller");
const router = express.Router();

router.post("/addNewConversation", addNewConversation);
router.get("/getAllConversations/:userId", getAllConversations);

module.exports = router;
