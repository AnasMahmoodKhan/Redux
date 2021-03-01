import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import RoomList from "./RoomList";
import io from "socket.io-client";

let socket;

const Home = () => {
  const ENDPT = "localhost:5000";
  const { user, setUser } = useContext(UserContext);
  const [room, setRoom] = useState("");
  const [rooms, setRooms] = useState("");
  
  useEffect(() => {
    socket = io(ENDPT);
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPT]);

  useEffect(() => {
    socket.on('room-created', room =>{
      setRooms([...rooms,room])
    } )
  }, [rooms])

  useEffect(() => {
    console.log(rooms)
  }, [rooms])

  useEffect(() => {
    socket.on('output-rooms',rooms=>{
      setRooms(rooms)
    })
  }, [])

  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("create-room", room);
    console.log(room);
    setRoom("");
  };

  const setAsAnas = () => {
    const Anas = {
      name: "Anas",
      email: "anas@xyz.com",
      password: "Qwerty123",
      id: "123",
    };
    setUser(Anas);
  };
  const setAsTom = () => {
    const Tom = {
      name: "Tom",
      email: "Tom@xyz.com",
      password: "Qwerty123",
      id: "124",
    };
    setUser(Tom);
  };

  return (
    <div>
      <div className="row" style={{margin : "12px"}}>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                Welcome {user ? user.name : ""}
              </span>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="room"
                  type="text"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="validate"
                />
                <label htmlFor="room" >Create Room</label>
              </div>
            </div>

            <div className="center">
              <button
                className="waves-effect waves-light btn-small"
                onClick={handleSubmit}
              >
                Create Room
              </button>
            </div>
            <div className="card-action">
              <button
                className="waves-effect waves-light btn-small"
                onClick={setAsAnas}
              >
                set as Anas
              </button>
              &nbsp; &nbsp;
              <button
                className="waves-effect waves-light btn-small"
                onClick={setAsTom}
              >
                set as Tom
              </button>
            </div>
          </div>
        </div>

        <div className="col m6 s12">
          <RoomList rooms={rooms} />
        </div>
      </div>
    </div>
  );
};

export default Home;
