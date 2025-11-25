import "./reg.css"

type regTypes = {
  isReg: boolean
  cancelReg: () => void;
  signDetails: () => void
}


function RegFx({isReg, cancelReg, signDetails}: regTypes) {
  if (isReg === false) return null

    return (
     <div className="reg-fx">
       <div className="signup-reg-popup">
          <button className="cancel-btn" onClick={cancelReg}>
            <img className="cancel-img" src="images/icons/close-button.png" />
          </button>
        <h1>Create an account</h1>
        <div className="reg-main-bx">
          <input className="reg-bxs" placeholder="First Name" type="text" />
          <input className="reg-bxs" placeholder="Last Name" type="text" />
          <input className="reg-bxs" placeholder="Email Address" type="text" />
          <input className="reg-bxs" placeholder="Confirm Email Address" type="text" />
          <input className="reg-bxs" placeholder="Password" type="text" />
          <input className="reg-bxs" placeholder="Confirm Password" type="text" />
          <button className="reg-nxt">NEXT</button>
        </div>
          <div className="reg-action">
            <p>Already have an account?<span>
              <button className="sign-in-btn" 
               onClick={signDetails}
              >sign in</button>
            </span></p>
          </div>
       </div>
     </div>
    )
}

export default RegFx;