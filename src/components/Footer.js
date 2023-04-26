//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/btkerns96" target="_blank" rel="noreferrer">
            Brandon Kerns
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/brandon-kerns-220b47238//"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
