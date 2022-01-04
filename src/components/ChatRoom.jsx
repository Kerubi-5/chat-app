import { addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { messages_db } from "../utils/firebase";

const Chatroom = ({ user, signOutClick }) => {
  const [myUser, setUser] = useState({ user });
  const printUser = (user) => {
    console.log(JSON.stringify(user));
  };

  const saveToDB = async () => {
    const myMessage = {
      msg: "Nice",
      user: myUser.user.displayName,
    };
    try {
      await addDoc(messages_db, myMessage);
    } catch (err) {
      console.log(err);
    }
  };

  const readData = async () => {
    const querySnapshot = await getDocs(messages_db);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  // useEffect(() => {
  //   const db_query = query(messages_db, limit(10));
  //   return () => {
  //     db_query;
  //   };
  // }, []);
  return (
    <div>
      <h1>Good day {myUser.user.displayName}</h1>
      Chatroom
      <button onClick={() => printUser({ user })}>Print user</button>
      <button onClick={() => signOutClick()}>Sign Out</button>
      <button onClick={saveToDB}>TEST</button>
      <button onClick={readData}>READ DATA</button>
    </div>
  );
};

export default Chatroom;
