import "./header.css"

function headers () {
  return (
    <>
     <div className="header-container">

      <div className="header-left-section">
        <img className="revamp-brand-logo" src="images/brands-logo/tailor-logos-new.jpg" alt="" />
      </div>

      <div className="header-middle-section">
        <a href="">
          About
        </a>
        <a href="">
          services
        </a>
        <a href="">
          contact
        </a>
      </div>
        <div className="header-right-section">
          <div className="reg-bx">
            <p>Login/Signup</p>
          </div>
        </div>
     </div>
    </>
  )
}

export default headers