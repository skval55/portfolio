import React from "react";

export const Projects = () => {
  return (
    <ul className="timeline timeline-vertical">
      <li>
        <div className="timeline-start timeline-box">
          <a href="https://grooveguru-react.vercel.app/">GrooveGuru</a>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-end timeline-box">
          <a href="https://skval-react-jobly.surge.sh/">Jobly</a>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start timeline-box">
          <a href="https://skval55.github.io/connect-four/">connect 4</a>
        </div>
        <hr />
      </li>
    </ul>
  );
};
