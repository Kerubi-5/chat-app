import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ChatMessage = ({ message }) => {
  const user = useContext(AuthContext);
  const messageClass = message.uid === user.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <div className="message__logo">
        <img src={message.photoURL} alt="User image" />
        {message.user}
      </div>
      <div className="message__content">{message.msg}</div>
    </div>
  );
};

export default ChatMessage;
