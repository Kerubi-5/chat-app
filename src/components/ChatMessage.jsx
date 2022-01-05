import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ChatMessage = ({ message }) => {
  const user = useContext(AuthContext);
  const messageClass = message.uid === user.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <h1>
        <span>{message.user}</span>: {message.msg}
      </h1>
    </div>
  );
};

export default ChatMessage;
