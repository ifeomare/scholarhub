import "../styles/create-account.css";
import Navbar from "../components/navbar.jsx";
const CreateAccount = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <aside className="aside-border"></aside>
        <main className="create-account-container">
          <form className="signup-form">
            <h1>Create Your Account</h1>
            <div style={{ display: "flex" }}>
              <div className="textbox-s" style={{ marginBottom: 0 }}>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" id="fname" />
              </div>
              <div className="textbox-s" style={{ marginBottom: 0 }}>
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" id="lname" />
              </div>
            </div>
            <div className="textbox-xl">
              <label htmlFor="school">School</label>
              <input type="text" name="school" id="school" />
            </div>
            <div className="d-flex" style={{ minWidth: "80%" }}>
              <div className="textbox-l" style={{ marginBottom: 0 }}>
                <label htmlFor="major">Major(if applicable)</label>
                <input type="text" name="major" id="major" />
              </div>
              <div className="textbox-xs" style={{ marginBottom: 0 }}>
                <label htmlFor="gpa">GPA</label>
                <input type="text" name="gpa" id="gpa" />
              </div>
            </div>
            <div className="textbox-xl">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="textbox-xl">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password" />
            </div>
            <div className="form-footer" style={{marginTop: "30px"}}>
              <div className="submit-button-container">
                <input
                  type="submit"
                  value="Create Account"
                  id="submit-button"
                />
              </div>
              <a href="/log-in">Log In</a>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default CreateAccount;
