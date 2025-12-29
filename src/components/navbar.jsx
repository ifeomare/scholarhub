import '../styles/navbar.css';
import { PiStudentBold } from "react-icons/pi";

const navbar = () => {
    return (
      // fix navbar - include a nav tag and make every "link" with li and a tags with each developed page
      <header className="navbar">
        <div>
          <h1>Scholarhub</h1>
        </div>
        <div className="nav-menu">
          <h2 className="nav-menu-item"><u>Dashboard</u></h2>
          <h2 className="nav-menu-item">About Us</h2>
          <h2 className="nav-menu-item">FAQ</h2>
          <div className="nav-menu-item">
            <PiStudentBold className="profile-icon" />
          </div>
        </div>
      </header>
    );
}

export default navbar
