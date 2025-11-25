 type signType = {
    isSign: boolean;
    cancelSign: () => void;
    regDetails: () => void
 } 

function SignInPop({isSign, cancelSign, regDetails}: signType) {
  if (!isSign) return null
  
    return (
     <>
    <div className="reg-fx" 
      >
       <div className="signup-reg-popup">
          <button className="cancel-btn" onClick={cancelSign}>
            <img className="cancel-img" src="images/icons/close-button.png" />
          </button>
        <h1>Welcome back</h1>
        <div className="reg-main-bx">
          <input className="sign-in-bx" placeholder="Email" type="text" />
          <input className="sign-in-bx" placeholder="Password" type="text" />
          <button className="reg-nxt">Sign in</button>
        </div>

          <div className="opt-main-bx">
              <p className="opt-sign-in">or</p>
              <input className="phone-sign-in-bx" placeholder="Sign up with phone number" type="text" />
          </div>

          <div className="reg-action">
            <p>Already have an account?</p>
             <button onClick={regDetails}>sign up</button>
            <p>Forgotten password?</p>
          </div>
       </div>
     </div>
     </>
    )
}

export default SignInPop