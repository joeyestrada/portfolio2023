export default function CurrentProject({ project }) {
  return (
    <div>
      <h1>{project.title}</h1>
      <h2>{project.description}</h2>
      <div className="group1">
        <div>
          <p>Technologies used:</p>
          <ul>
            {project.technology.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <img src={project.photo}></img>
        </div>
      </div>
      <div className="buttons">
        {project.link && (
          <a href={project.link} className="flat-button">
            GitHub Repo
          </a>
        )}
        {project.deployment && (
          <a href={project.deployment} className="flat-button">
            Deployed App
          </a>
        )}
      </div>
    </div>
  );
}
