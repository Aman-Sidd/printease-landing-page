import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="gradient-text">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div>
                  <a
                    href="https://print-ease.netlify.app"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{ margin: 10 }}
                  >
                    Try on Web{" "}
                  </a>
                  <a
                    href="https://drive.google.com/file/d/19DwC6i48bwFdY9kQtvW3FaSLICvKDA45/view?usp=drive_link"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{ margin: 10 }}
                  >
                    Download APK{" "}
                  </a>
                </div>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
