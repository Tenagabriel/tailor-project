import "./works.css";

function Works() {
  return (
    <>
      <div className="max-bx">
        <h2 className="sec-name">How it Works</h2>
        <div className="works-bx-main">
          <div className="works-bx">
            <div className="work-steps-head">
              <img
                className="customer-icon"
                src="images/icons/profile.png"
                alt=""
              />
              <h2>Sign up to get started</h2>
            </div>
            <div className="signup-content-bx">
              <p>
                Sign up in minutes and explore <br />
                a world where tailors and <br />
                customers meet, collaborate, and create
              </p>
            </div>
          </div>
            <div className="works-bx">
            <div className="work-steps-head">
              <img
                className="customer-icon"
                src="images/icons/add.png"
                alt=""
              />
              <h2>Create or Explore Profiles</h2>
            </div>
            <div className="signup-content-bx">
              <p>
               Show off your craft or discover talented <br/> tailors near you with detailed portfolios and verified reviews.
              </p>
            </div>
          </div>
          <div className="works-bx">
            <div className="work-steps-head">
              <img
                className="connect-icon"
                src="images/icons/connect.png"
                alt=""
              />
              <h2>Connect and communicate</h2>
            </div>
            <div className="connect-content-bx">
              <p>
                Easily connect with verified tailors or <br />
                customers who match your style, needs, and <br />
                creative goals.
              </p>
            </div>
          </div>
          <div className="works-bx-styled">
            <div className="work-steps-head">
              <img
                className="dress-icon"
                src="images/icons/dress.png"
                alt=""
              />
              <h2>Get styled</h2>
            </div>
            <div className="signup-content-bx">
              <p>
                Step out in confidence with perfectly <br />
                tailored outfits that reflect your individuality <br />
                and elevate your everyday look
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
