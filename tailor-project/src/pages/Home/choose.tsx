import "./choose.css"

function Choose() {
    return (
      <>
        <div className="choose-max-bx">
          <h2 className="choose-sec-name">Why Choose Us</h2>
          <div className="choose-main-bx">
            <div className="choose-bx">
                <div className="choose-head">
                    <div className="choose-img-bx"><img className="choose-img"src="images/icons/shield.png" alt="" /></div>
                    <h3>Secure & Verified Tailors</h3>
                </div>
                <p>Work confidently knowing all profiles are checked, approved, and fully secure.</p>
            </div>
            <div className="choose-bx">
                <div className="choose-head">
                    <div className="choose-img-bx"><img className="choose-img" src="images/icons/chat-bubble.png" alt="" /></div>
                    <h3>Easy Communication</h3>
                </div>
                <p>Chat instantly with tailors or clients to discuss designs, pricing, and updates effortlessly.</p>
            </div>
            <div className="choose-bx">
                <div className="choose-head">
                    <div className="choose-img-bx"><img className="choose-img" src="images/icons/check.png" alt="" /></div>
                    <h3>Transparent pricing</h3>
                </div>
                <p>Fair, transparent pricing that helps you choose the right tailor without surprises.</p>
            </div>
            <div className="choose-bx">
                <div className="choose-head">
                    <div className="choose-img-bx"><img className="choose-img" src="images/icons/infinity.png" alt="" /></div>
                    <h3>Seamless Experience</h3>
                </div>
                <p>Navigate the platform with ease as every step from browsing tailors to bookings is designed to be smooth and intuitive</p>
            </div>
          </div>
        </div>
      </>
    )
}

export default Choose;