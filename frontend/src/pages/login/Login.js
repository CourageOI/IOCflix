import "./login.scss";
import Netflix_logo from "../../components/image/netflix-logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Netflix_logo} alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign in</button>
          <span>
            New to Netflix?{" "}
            <Link to={"/register"}>
              <b>Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
