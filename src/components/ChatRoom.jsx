import { addDoc, query, orderBy, limit, Timestamp } from "firebase/firestore";
import { useState, useRef } from "react";
import { messages_db } from "../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Chatroom = ({ user, signOutClick }) => {
  const [myUser, setUser] = useState({ user });

  const messageRef = useRef(null);

  const myQuery = query(messages_db, orderBy("createdAt", "desc"), limit(10));

  const [messages] = useCollectionData(myQuery, { idField: "id" });

  const saveToDB = async () => {
    const myMessage = {
      msg: messageRef.current.value,
      user: myUser.user.displayName,
      createdAt: Timestamp.now(),
    };
    try {
      await addDoc(messages_db, myMessage);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Good day {myUser.user.displayName}</h1>
      Chatroom
      {messages &&
        messages.reverse().map((message) => {
          return (
            <h1 key={message.id}>
              <span>{message.user}</span>: {message.msg}
            </h1>
          );
        })}
      <input type="text" ref={messageRef} />
      <button onClick={saveToDB}>TEST</button>
      <button onClick={() => signOutClick()}>Sign Out</button>
    </div>
  );
};

export default Chatroom;
