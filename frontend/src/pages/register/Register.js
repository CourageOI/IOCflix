import "./register.scss";
import Netflix_logo from "../../components/image/netflix-logo.png";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Netflix_logo} alt="" />
          <button className="loginButton">Sign in</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" ref={emailRef} placeholder="Email address" />
            <button className="registerButton" onClick={handleStart}>
              Get started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              ref={passwordRef}
              placeholder="password address"
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
