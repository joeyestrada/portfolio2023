import "./index.scss";
import AnimatedLetters from "../AnimatedLetters/index.js";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About Me".split("")}
              idx={15}
            />
          </h1>
          <p>
            If you knew me personally, you'd know that I love the art that is
            creation. Whether it’s creating music or software, my heart is only
            truly happy when my brain is hard at work making something
            ‘fun’ctional. My interest in software began way back when I was a
            child, trying to hack some of my favorite computer games for an
            unrealistic high score to show off to my friends at school.
          </p>
          <p>
            Today, I am a career-swticher, from music-related sales in pro-audio
            and band instruments, to now a full-stack developer. Working at a
            mom-and-pop shop in Central Florida, I was tasked with using a
            website builder to create a brand new website for the company. While
            I was enjoying my time with the website builder, I came to find the
            platform a bit restrictive, thus my interest in web development
            started to unfold.
          </p>
          <p>
            Not too long after that, I decided to transition into becoming a
            full-stack developer by enrolling in Thinkful’s Software Engineering
            Immersion program, a five-month intense coding bootcamp centered
            around mastering some of the following technologies shown in the
            animated cube!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faWindows} color="#28A4D9" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </div>
  );
}
