import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
import io from "socket.io-client";
import Messages from "./messages/Messages";
import Members from "./Members";

let socket;

const Chat = () => {
  const ENDPT = "localhost:5000";
  const { user, setUser } = useContext(UserContext);
  let { room, room_id } = useParams();
  let [message, setMessage] = useState("");
  let [messages, setMessages] = useState([]);
  let [usersInRoom, setusersInRoom] = useState([]);

  useEffect(() => {
    socket = io(ENDPT);
    socket.emit("join", { name: user.name, room_id, user_id: user.id });
  }, []);

  useEffect(() => {
    socket.on('output-messages',messages=>{
      setMessages(messages)
    })
  }, [])
  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
      setMessages([...messages, message]);
    });
  }, [messages]);
  
  


  useEffect(() => {
    socket.on("users", (user) => {
      console.log(user);
      setusersInRoom([...usersInRoom, user]);
    });
  }, [usersInRoom]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      console.log(message);
      socket.emit("sendMessage", message, room_id, () => setMessage(""));
    }
  };

  return (
    <div style={{margin : '12px'}}>
      <h5 style={{textAlign : "center"}}>{room}</h5>
      <div className="row">
        <Members />

        <div className="col-sm-8">
          <div className="chatbody">
            <div className="panel panel-primary">
              <div className="panel-heading top-bar">
                <div className="col-md-8 col-xs-8">
                  <h3 className="panel-title">
                    <span className="glyphicon glyphicon-comment"></span> Chat -{" "}
                    {user.name}
                  </h3>
                </div>
              </div>
              <Messages messages={messages} user_id={user.id} />

              <form action="" onSubmit={(e) => sendMessage(e)}>
                <div className="panel-footer">
                  <div className="input-group">
                    <input
                      type="text"
                      id="btn-input"
                      
                      className="form-control input-sm chat_input"
                      placeholder="Write your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" ? sendMessage(e) : null
                      }
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-primary btn-sm" id="btn-chat">
                      <i class="material-icons">send</i>
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
