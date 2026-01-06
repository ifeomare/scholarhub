import Navbar from "../components/navbar.jsx";
import "../styles/about-us.css";
function AboutUs() {
  return (
    <>
      <Navbar />
      <main
        style={{
          height: "86vh",
          textAlign: "center",
        }}
      >
        <div className="about">
          <h1 style={{ textDecoration: "underline" }}>About Scholarhub</h1>
          <p className="multiline">
            <i>
              We believe college is for everyone. Furthermore, college access is
              for everyone. It’s frustrating
              <br />
              looking forward to going to college, only to find out you can’t
              afford it.
              <br />
              We help college students find scholarships they didn’t know
              existed.
            </i>
          </p>
        </div>
        <div className="mission">
          <h1 style={{ textDecoration: "underline" }}>Our Mission</h1>
          <p className="multiline">
            <i>
              Our mission is to spread scholarship opportunities to teens who
              are unaware of such opportunities,
              <br />
              need help paying for college, or haven’t had much luck winning
              scholarships. <br />
              We hope that through this platform, you’ll find hope and success
              in paying off your college tuition.
            </i>
          </p>
        </div>
      </main>
    </>
  );
}

export default AboutUs;
