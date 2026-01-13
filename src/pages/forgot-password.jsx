import Navbar from "../components/navbar.jsx";
import "../styles/forgot-password.css";

function ForgotPassword() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <aside className="aside-border"></aside>
        <main className="forgot-pw-cont">
          <form className="forgot-pw-form">
            <h1>Forgot Your Password?</h1>
            <p>
              Enter the email you used to create your account. <br />
              If the email matches our records, we’ll send you <br />
              an email with a verification code.
            </p>
            <div>
              <div className="textbox-xl">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="send-code">
                <div className="textbox-s" style={{ minWidth: "50%", margin: "auto 0 0 0" }}>
                  <label htmlFor="Code">Code</label>
                  <input type="text" style={{ maxWidth: "80%" }} />
                </div>
                <input
                  type="submit"
                  value="Send Code"
                  style={{ float: "right", maxWidth: "50%", margin: "auto 0 0 auto", fontSize: "15px", verticalAlign: "middle" }}
                  id="submit-button"
                />  
              </div>
              <div className="submit-button-container">
                <input type="submit" value="Verify" id="submit-button" style={{fontSize: "17px"}} />
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default ForgotPassword;
