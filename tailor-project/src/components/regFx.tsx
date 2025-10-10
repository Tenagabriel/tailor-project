import "./reg.css"

type regTypes = {
  isReg: boolean
  cancelReg: () => void
}


function RegFx({isReg, cancelReg}: regTypes) {
    return (
     <div className="reg-fx"
      style={{opacity: isReg === false ? 0 : 1 }}
     >
       <div className="signup-reg-popup">
          <button className="cancel-btn" onClick={cancelReg}>
            <img className="cancel-img" src="images/icons/close-button.png" />
          </button>
        <h1>Create an account</h1>
        <div className="reg-main-bx">
          <input className="reg-bx" placeholder="First Name" type="text" />
          <input className="reg-bx" placeholder="Last Name" type="text" />
          <input className="reg-bx" placeholder="Email Address" type="text" />
          <input className="reg-bx" placeholder="Confirm Email Address" type="text" />
          <input className="reg-bx" placeholder="Password" type="text" />
          <input className="reg-bx" placeholder="Confirm Password" type="text" />
          <input className="reg-box reg-nxt" placeholder="NEXT" type="text" />
        </div>
          <div className="reg-action">
            <p>Already have an account?<span><a href="">sign in</a></span></p>
          </div>
       </div>
     </div>
    )
}

export default RegFx;