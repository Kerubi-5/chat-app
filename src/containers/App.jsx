import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// CONTEXTS
import { AuthContext } from "../contexts/AuthContext";

import Signin from "../components/SignIn";
import ChatRoom from "./ChatRoom";

// GLOBAL VARS

function App() {
  const [user, loading, error] = useAuthState(auth);

  const googleHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        setUser(result.user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out succesfully");
        setUser(null);
      })
      .catch((error) => {
        console.log("there was an error signing out");
      });
  };
  return (
    <AuthContext.Provider value={user}>
      <div className="App">
        {user ? (
          loading ? (
            "page is loading"
          ) : (
            <ChatRoom signOutClick={signOutHandler} />
          )
        ) : (
          <Signin googleSignIn={googleHandler} />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
