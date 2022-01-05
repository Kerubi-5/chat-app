const Signin = ({ google, facebook, twitter, anonymous }) => {
  return (
    <div className="container">
      <div className="title-header">
        <h4>Sign In to KK Chatting App</h4>
      </div>
      <button className="btn btn-login" onClick={google}>
        <i className="bx bxl-google"></i>&nbsp;
        <span>Google</span>
      </button>
      <button className="btn btn-login" onClick={facebook}>
        <i className="bx bxl-facebook"></i>&nbsp;
        <span>Facebook</span>
      </button>
      <button className="btn btn-login" onClick={twitter}>
        <i className="bx bxl-twitter"></i>&nbsp;
        <span>Twitter</span>
      </button>
      <button className="btn btn-login" onClick={anonymous}>
        <i class="bx bxs-user"></i>&nbsp;
        <span>Anonymous</span>
      </button>
    </div>
  );
};

export default Signin;
