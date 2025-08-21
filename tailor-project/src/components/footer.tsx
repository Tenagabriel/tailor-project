import './footer.css'

function Footer() {
    return(
         <div className="footer-ctn">
      <div className="social-ctn">
        <img className="social-icons" src="images/icons/facebook.png" alt="" />
        <img className="social-icons" src="images/icons/twitter.png" alt="" />
        <img className="social-icons" src="images/icons/instagram.png" alt="" />
      </div>
      <div className="foot-box">
        <div className="foot-boxes">
          <h5>HELP AND INFORMATION</h5>
          <ul>
            <li>Help</li>
            <li>Track order</li>
            <li>Delivery & returns</li>
            <li>Site map</li>
          </ul>
        </div>
        <div className="foot-boxes">
          <h5>ABOUT MY-CLOSET</h5>
           <ul>
            <li>About us</li>
            <li>Careers at ASOS</li>
            <li>Corporate responsibility</li>
            <li>investors' site</li>
          </ul>
        </div>
        <div className="foot-boxes">
          <h5>MORE FROM MY-CLOSET</h5>
           <ul>
            <li>mobile and My-Closet apps</li>
            <li>Gift vouchers</li>
            <li>Black Friday</li>
            <li>My-Closet x Thrift</li>
          </ul>
        </div>
        <div className="foot-boxes">
          <h5>PRIVACY AND LEGAL</h5>
           <ul>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>About Cookies</li>
            <li>Terms of Use</li>
            <li>Product</li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Footer;