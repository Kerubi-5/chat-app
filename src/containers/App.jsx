import { signInWithPopup, signInAnonymously, signOut } from "firebase/auth";
import {
  auth,
  google_provider,
  facebook_provider,
  twitter_provider,
} from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// CONTEXTS
import { AuthContext } from "../contexts/AuthContext";

import SignIn from "../components/SignIn";
import ChatRoom from "./ChatRoom";

// GLOBAL VARS

function App() {
  const [user, loading, error] = useAuthState(auth);

  const googleHandler = () => {
    signInWithPopup(auth, google_provider);
  };

  const facebookHandler = () => {
    signInWithPopup(auth, facebook_provider);
  };

  const twitterHandler = () => {
    signInWithPopup(auth, twitter_provider);
  };

  const anonymousHandler = () => {
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  const signOutHandler = () => {
    console.log(user);
    signOut(auth)
      .then(() => {
        console.log("Sign out succesfully");
      })
      .catch((error) => {
        console.log("there was an error signing out", error);
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
          <SignIn
            google={googleHandler}
            facebook={facebookHandler}
            twitter={twitterHandler}
            anonymous={anonymousHandler}
          />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
