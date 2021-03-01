import React, { useEffect, useRef } from "react";
import Message from "../message/Message";

const Messages = ({ messages, user_id }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="panel-body msg_container_base">
      {messages.map((message) => (
        <Message message={message} key={message._id} current_uid={user_id} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
