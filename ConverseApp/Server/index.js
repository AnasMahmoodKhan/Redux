const express = require("express");
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true")
  next();
});
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const authRoutes = require("./routes/authRoute");
app.use(express.json());
app.use(authRoutes);
// const cors = require('cors')
// const corsOption = {
//   origin : '*',
//   credentials : true,
//   optionSuccessStatus : 200
// }
// app.use(cors(corsOption))
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://AnasKhan:qwerty123@cluster0.di2gc.mongodb.net/chat-database?retryWrites=true&w=majority";

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

const Room = require("./models/Room");



app.get('/set-cookies', (req,res)=>{
  res.cookie('isAuth', true ,{httpOnly : true})
  res.send('cookies are set')
})
app.get('/get-cookies', (req,res)=>{
  const cookies = req.cookies;
  console.log(cookies)
  res.json(cookies)
})

const PORT = process.env.PORT || 5000;

const { addUser, getUser, removeUser, allUsers } = require("./helper");
const Message = require("./models/Message");

io.on("connection", (socket) => {
  
  Room.find().then((result) => {
    socket.emit("output-rooms", result);
  });

  socket.on("create-room", (name) => {
    // console.log("Room Name : ", name);
    const room = new Room({ name });
    room.save().then((result) => {
      io.emit("room-created", result);
    });
  });
  socket.on("join", ({ name, room_id, user_id }) => {
    const { err, user } = addUser({
      socket_id: socket.id,
      name,
      room_id,
      user_id,
    });

    socket.join(room_id);
    if (err) {
      console.log("join error : ", err);
    } else {
      console.log("join user : ", user);
    }
    Message.find({ room_id: room_id }).then((result) => {
      socket.emit("output-messages", result);
    });
  });

  socket.on("sendMessage", (message, room_id, callback) => {
    const user = getUser(socket.id);
    const msgtoStore = {
      name: user.name,
      user_id: user.user_id,
      room_id,
      text: message,
    };
    console.log("message", msgtoStore);
    const msg = new Message(msgtoStore);
    msg.save().then((result) => {
      io.to(room_id).emit("message", result);
      callback();
    });
  });
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
