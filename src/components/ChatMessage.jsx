import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ChatMessage = ({ message }) => {
  const user = useContext(AuthContext);
  const messageClass = message.uid === user.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <span>{message.user}</span>: {message.msg}
    </div>
  );
};

export default ChatMessage;
