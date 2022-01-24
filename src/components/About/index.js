import React from "react";
import "../../App.css";
function About() {
  return (
    <section className="title">
      <h1 class="name">Mambu Francis</h1>
      <hr></hr>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img
            class="mb-5"
            src="https://avatars.githubusercontent.com/u/31299322?v=4"
            alt="Mambu Francis"
          />
          <div className="card-body">
            <div className="row">
              <p className="p-about">
                A passionate software Engineer with hands on experience on
                technologies such as React.js, Angular.js, Node.js, Express.js,
                Next.js, ES6, HTML5, CSS3, BootsTrap, Django, Flask
              </p>
            </div>
          </div>

          <div className="modal-footer" />

          <div className="card-body">
            <h2 className="edu">EDUCATION:</h2>
            <br />

            <div className="grid-container-profile">
              <div className="grid-item">
                <div className="title-uni">Lincoln University (PA)</div>
                <div className="title-concentration">
                  Bachelor of Science: Information Technology
                </div>
              </div>

              <div className="grid-item">
                <div className="title-uni">Rutgers University (RU)</div>
                <div className="title-concentration">Coding Bootcamp</div>
              </div>
            </div>
          </div>
          {/* <p>
            View full{" "}
            <a href="#/resume" class="link">
              resume
            </a>
          </p> */}
        </div>
      </div>
    </section>
  );
}

export default About;
