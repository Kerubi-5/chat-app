const Signin = ({ googleSignIn }) => {
  return (
    <div>
      Hello please sign in
      <button onClick={googleSignIn}>Sign in</button>
    </div>
  );
};

export default Signin;
