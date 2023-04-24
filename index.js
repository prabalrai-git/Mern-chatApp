const express = require("express");
require("dotenv").config();

const cors = require("cors");
const userRouter = require("./routes/User-route");

const conversationRouter = require("./routes/Conversation-route");

const connectDB = require("./Db/connect");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
// routes

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/conversation", conversationRouter);

app.get("/", (req, res) => {
  res.send(`<h1>HELLO WORLD</h1>`);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () =>
      console.log(
        `connected to db ...app is listening on port ${process.env.PORT}...`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();
