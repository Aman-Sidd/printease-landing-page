import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div id="row">
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src="img/team/amanPic.jpeg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Muhammad Aman Siddiqui</h4>
                <p>Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img
                src="img/team/prakharPic1.jpeg"
                alt="..."
                className="team-img prakharImg"
              />
              <div className="caption">
                <h4>Prakhar Sinha</h4>
                <p>Co-Founder & CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
