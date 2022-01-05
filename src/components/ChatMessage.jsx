import React from "react";

const ChatMessage = ({ message }) => {
  return (
    <div>
      <h1 key={message.id}>
        <span>{message.user}</span>: {message.msg}
      </h1>
    </div>
  );
};

export default ChatMessage;
