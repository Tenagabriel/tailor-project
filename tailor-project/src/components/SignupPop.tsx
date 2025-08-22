function SignPop() {
    return (
        <div className="signup-popup">
     <div className="main-sign-in-box">
      <button className="sign-in-op">Sign in</button>
     </div>
     <div className="sign-up-box">
      <a className="sign-up-prompt" href="">
        <div className="icon-container">  
          <img className="user-icon" src="images/icons/people.png" alt="" />
        </div>
        <p className="sign-up-text">Sign up</p>
      </a>
     </div>
     <div>
        <a className="sign-up-prompt" href="">
        <div className="icon-container">  
          <img className="user-icon" src="images/icons/heart-icon.png" alt="" />
        </div>
          <p className="sign-up-text">My likes</p>
      </a>
     </div>
     <div>
       <a className="sign-up-prompt" href="">
        <div className="icon-container">  
          <img className="faq-icon" src="images/icons/faq icon.png" alt="" />
        </div>
          <p className="sign-up-text">FAQ</p>
      </a>
     </div>
   </div>
    )
}

export default SignPop;