import React from "react";

function Footer() {
  return (
    <div class="footer" id="footer">
      <a href="https://github.com/mambu1998">
        <img
          src="https://img.icons8.com/color/48/000000/github-2.png"
          alt="Github"
          class="icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/mambu-francis-594943148/">
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt="LinkedIn"
          class="icon"
        />
      </a>
      <a href="https://twitter.com/mambu1998">
        <img
          src="https://img.icons8.com/color/48/000000/twitter.png"
          alt="Twitter"
          class="icon"
        />
      </a>
      <a href="https://stackoverflow.com/users/mambu1998">
        <img
          src="https://img.icons8.com/color/48/000000/stackoverflow.png"
          alt="Stack Overflow"
          class="icon"
        />
      </a>
      <p>
        &copy; Mambu Francis |{" "}
        <a href="Github link/raw/master/src/assets/Mambu.pdf" class="link">
          download resume
        </a>{" "}
        |{" "}
        <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">
          color palette
        </a>{" "}
        | made with{" "}
        <img
          id="react-icon"
          src="https://img.icons8.com/color/48/000000/react-native.png"
          alt="React"
        />
      </p>
    </div>
  );
}

export default Footer;
