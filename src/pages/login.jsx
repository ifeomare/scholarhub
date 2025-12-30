import "../styles/login.css";
import Navbar from "../components/navbar.jsx";

function Login() {
  return (
    <>
      <Navbar />
      <div className="page-format">
        <aside className="aside-border"></aside>
        <main className="login-container">
          <form className="login-form">
            <h1 className="form-header">
              Log In To Your Account
              <br />
              Here
            </h1>
            <div className="input-styles">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="input-styles">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password" />
            </div>
            <div className="submit-button">
              <input type="submit" value="Log In" id="login" />
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;
