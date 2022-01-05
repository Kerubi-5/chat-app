import { addDoc, query, orderBy, limit, Timestamp } from "firebase/firestore";
import { useState, useRef } from "react";
import { messages_db } from "../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../components/ChatMessage";

const Chatroom = ({ user, signOutClick }) => {
  const [myUser, setUser] = useState({ user });
  const dummy = useRef();

  const messageRef = useRef(null);

  const myQuery = query(messages_db, orderBy("createdAt", "desc"), limit(25));

  const [messages] = useCollectionData(myQuery, { idField: "id" });

  const saveToDB = async (e) => {
    if (messageRef.current.value === "") {
      return;
    }

    if (e.keyCode === 13 || e === "click") {
      const myMessage = {
        msg: messageRef.current.value,
        user: myUser.user.displayName,
        createdAt: Timestamp.now(),
      };
      try {
        await addDoc(messages_db, myMessage);
        messageRef.current.value = "";
        dummy.current.scrollIntoView({ behavior: "smooth" });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="chatroom">
      <div className="chatroom__header">
        <h1>Chatroom</h1>
        <h4>Good day {myUser.user.displayName}</h4>
        <button onClick={signOutClick}>Sign Out</button>
      </div>
      <div className="chatroom_body">
        {messages &&
          messages.reverse().map((message) => {
            return <ChatMessage message={message} />;
          })}
        <span ref={dummy}></span>
      </div>
      <div className="chatroom__footer">
        <input
          type="text"
          ref={messageRef}
          placeholder="Send a message..."
          onKeyDown={(e) => saveToDB(e)}
        />
        <button onClick={() => saveToDB("click")}>Send</button>
      </div>
    </div>
  );
};

export default Chatroom;
