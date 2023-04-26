// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Asipring Front-End Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Brandon Kerns"/>
      <p className="content is-italic mt-4">
        I'm Brandon, include more info at later date
      </p>
      <p className="content">
        BIO HERE
      </p>
    </div>
  );
}

export default About;
