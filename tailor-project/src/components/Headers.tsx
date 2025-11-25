import "./header.css"

type RegProps = {
  regClick: () => void;
}

function headers ({regClick}: RegProps) {


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
          <button className="reg-hd-btn" onClick={regClick}>
            Login/Signup
          </button>
        </div>
     </div>
    </>
  )
}

export default headers;