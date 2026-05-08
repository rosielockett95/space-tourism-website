import logo from "./assets/shared/logo.svg";
import { Link } from "react-router-dom";

export default function Header({ home, destination, crew, technology }) {
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} />
        </div>
        <div>
          <hr></hr>
        </div>
        <nav className="nav-container">
          <div className="individual-nav-container">
            <Link to={home}>
              <p>00</p>
              <span>Home</span>
            </Link>
          </div>
          <div className="individual-nav-container">
            <Link to={destination}>
              <p>01</p>
              <span>Destination</span>
            </Link>
          </div>
          <div className="individual-nav-container">
            <Link to={crew}>
              <p>02</p>
              <span>Crew</span>
            </Link>
          </div>
          <div className="individual-nav-container margin">
            <Link to={technology}>
              <p>03</p>
              <a>Technology</a>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
