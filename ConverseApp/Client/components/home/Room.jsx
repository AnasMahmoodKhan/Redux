import React from "react";
import { Link } from "react-router-dom";

const Room = ({room}) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{room.name}</span>
          </div>
          <div className="card-action">
              <Link className="waves-effect waves-light btn-small" to={`/chat/${room._id}/${room.name}`}>Join Room</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
