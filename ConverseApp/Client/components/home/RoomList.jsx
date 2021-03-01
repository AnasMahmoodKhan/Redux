import React from "react";
import Room from "./Room";

const RoomList = ({ rooms }) => {
  return (
    <div>
      {rooms && rooms.map((room) => <Room key={room._id} room={room} />)}
    </div>
  );
};

export default RoomList;
