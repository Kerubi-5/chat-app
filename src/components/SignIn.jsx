const Signin = ({ google, facebook, twitter }) => {
  return (
    <div className="container">
      <h4>Sign In</h4>
      <button className="btn" onClick={google}>
        <i className="bx bxl-google"></i>&nbsp;
        <span>Google</span>
      </button>
      <button className="btn" onClick={facebook}>
        <i className="bx bxl-facebook"></i>&nbsp;
        <span>Facebook</span>
      </button>
      <button className="btn" onClick={twitter}>
        <i className="bx bxl-twitter"></i>&nbsp;
        <span>Twitter</span>
      </button>
    </div>
  );
};

export default Signin;
