import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoJE from "../../assets/images/jelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoJE} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="projects"
          to="/projects"
        >
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
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
    </div>
  );
};

export default Sidebar;
