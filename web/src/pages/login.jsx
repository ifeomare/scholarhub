import "../styles/login.css";
import Navbar from "../components/navbar.jsx";

function Login() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <aside className="aside-border"></aside>
        <main className="login-container">
          <form className="login-form">
            <h1 className="form-header">
              Log In To Your Account
              <br />
              Here
            </h1>
            <div className="textbox-xl">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="textbox-xl">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password" />
            </div>
            <div className="form-footer">
              <div className="submit-button-container">
                <input type="submit" value="Log In" id="submit-button" />
              </div>
              <a href="/create-account">Register</a>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;
