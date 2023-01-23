import "./index.scss";
import Loader from "react-loaders";

export default function Projects() {
  return (
    <div>
      <div className="container about-page">
        <div className="text-zone">
          <h1>Under Construction!</h1>
          <p>
            Please check back soon, in the meantime my resume should have my
            latest projects available for viewing! Feel free to reach out if you
            have questions.
          </p>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </div>
  );
}
