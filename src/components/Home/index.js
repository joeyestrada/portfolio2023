import "./index.scss";
import { Link } from "react-router-dom";
import ProfilePic from "../../assets/images/joey.jpg";
import Gear from "../../assets/images/gear.png";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/index.js";
import Loader from "react-loaders";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = "I'm Joey Estrada".split("");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div>
      <div className="container home-page">
        <div className="text-zone">
          <img className="gear" alt="gear" src={Gear}></img>
          <h1 className="slide-in">
            <span className={letterClass}>H</span>
            <span className={letterClass}>i</span>
            <span className={letterClass}>,</span>
          </h1>
          <h1>
            {" "}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2>Full Stack Web Developer</h2>
          <div className="side-by-side">
            <div>
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
            </div>
            <div>
              <img className="border-wrap" src={ProfilePic} alt="joey"></img>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </div>
  );
}
