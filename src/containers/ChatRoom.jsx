import { addDoc, query, orderBy, limit, Timestamp } from "firebase/firestore";
import { useContext, useRef, useEffect } from "react";
import { messages_db } from "../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../components/ChatMessage";
import { AuthContext } from "../contexts/AuthContext";

const Chatroom = ({ signOutClick }) => {
  const user = useContext(AuthContext);
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
        user: user.displayName,
        createdAt: Timestamp.now(),
        photoURL: user.photoURL,
        uid: user.uid,
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
        <div className="dropdown">
          <img src={user.photoURL} alt="User's image" />
          <button onClick={signOutClick}>Sign Out</button>
        </div>
      </div>
      <div className="chatroom__body">
        {messages &&
          messages.reverse().map((message) => {
            return <ChatMessage key={message.id} message={message} />;
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
        <button onClick={() => saveToDB("click")}>
          <i className="bx bx-send"></i>
        </button>
      </div>
    </div>
  );
};

export default Chatroom;
