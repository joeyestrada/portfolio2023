import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoJE from "../../assets/images/jelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEnvelope,
  faHome,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoJE} alt="logo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="projects"
          to="/projects"
        >
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          size="3x"
          className="close-icon"
        />
      </nav>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/joseph-estrada/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joseph-estrada/">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#FFFFFF"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
