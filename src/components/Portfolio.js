import React from "react";
import Project from "./Project";

const projects = [
  {
    //Include projects here
  },
  {
   //Include projects here
  },
  {
   //Include projects here
  },
  {
    //Include projects here
  },
  {
 //Include projects here
  },
  {
   //Include projects here
  },
  {
//Include projects here
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
