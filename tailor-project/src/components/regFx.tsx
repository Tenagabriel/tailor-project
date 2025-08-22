function RegFx() {
    return (
     <div className="reg-fx">
       <div className="signup-reg-popup">
        <img className="cancel-btn" src="images/icons/close-button.png" alt="" />
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