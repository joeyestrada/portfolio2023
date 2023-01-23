import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/index";
import { useState, useEffect } from "react";
import CurrentProject from "./CurrentProject";
import { projects } from "./projectsData";

export default function Projects() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const projectsStr = "Projects".split("");

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const [animation, setAnimation] = useState("current-project");

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    setAnimation("current-project hide");
    setTimeout(() => {
      setCurrentProject(
        projects.find((project) => project.title === e.target.value),
      );
      setAnimation("current-project")
    }, 1000);
  };

  const projButtons = projects.map((project) => {
    return (
      <button
        onClick={clickHandler}
        key={project.title}
        value={project.title}
        className="flat-button"
      >
        {project.title}
      </button>
    );
  });

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div>
      <div className="container about-page">
        <div className="text-zone">
          <div>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={projectsStr}
                idx={15}
              />
            </h1>
            <div>{projButtons}</div>
          </div>
          <div className={animation}>
            <CurrentProject project={currentProject} />
          </div>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </div>
  );
}
