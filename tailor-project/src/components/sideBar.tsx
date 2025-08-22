import type { JSX } from 'react';
import './sidebar.css'


type SideBarProps = {
  isShowing: boolean,
  cancelButton: () => void;
}


function SideBar({isShowing, cancelButton}: SideBarProps): JSX.Element {
 


    return (
       <div className="side-bar" style={{transform: isShowing === true ? 'translate(-0%)' : 'translate(-100%)'}}>
       <img className="cancel-btn" src="images/icons/close-button.png" alt="" onClick={cancelButton}/>
      <ul>
        <li>
         <button className="side-bar-button side-bar-home">
          <p>Home</p>
          <img className="side-bar-img" src="images/illustration-images/side-bar-eight-removebg-preview.png" alt="" />
        </button>
        </li>
           <li>
          <button className="side-bar-button side-bar-explore">
            <p>Explore</p>
            <img className="side-bar-img" src="images/illustration-images/side-bar-one-removebg-preview.png" alt="" />
          </button>
          <ul className="explore-menu">
            <li><a href="filtered.html?Type=gown">Gowns</a></li>
            <li><a href="filtered.html?Type=suit">Suits</a></li>
            <li><a href="filtered.html?Type=Native">Native</a></li>
            <li><a href="filtered.html?Type=jean">Jeans</a></li>
            <li><a href="filtered.html?Type=polo">Polo</a></li>
          </ul>
        </li>
        <li>
          <button className="side-bar-button side-bar-trend">
            <p>Trending</p>
             <img className="side-bar-img"  src="images/illustration-images/side-bar-three-removebg-preview.png" alt="" />
          </button>
        </li>
        <li>
        <button className="side-bar-button side-bar-womens">
          <p>Womens</p>
          <img className="side-bar-img" src="images/illustration-images/side-bar-woman-one-removebg-preview.png" alt="" />
        </button>
      </li>
        <li>
        <button className="side-bar-button side-bar-mens">
          <p>Mens</p>
          <img className="side-bar-img" src="images/illustration-images/side-bar-five-removebg-preview.png" alt="" />
        </button>
      </li>
          <li>
         <button className="side-bar-button side-bar-Discover">
          <p>Discover</p>
          <img className="side-bar-img" src="images/illustration-images/side-bar-six-removebg-preview.png" alt="" />
         </button>
        </li>
        <li>
         <button className="side-bar-button 
         side-bar-about-us">
         <p>Brands</p>
        <img className="side-bar-img" src="images/illustration-images/side-bar-seven-removebg-preview.png" alt="" />
        </button>
        </li>
          <li>
         <button className="side-bar-button side-bar-about-us">
          <p>About us</p>
          <img className="side-bar-img" src="images/illustration-images/side-bar-nine-removebg-preview.png" alt="" />
        </button>
        </li>
        <li>
          <button className="side-bar-button side-bar-contact">
            <p>contact us</p>
            <img className="side-bar-img" src="images/illustration-images/side-bar-two-removebg-preview.png" alt="" />
          </button>
          <ul className="contact-menu">
            <li>
              <a href="https://x.com/Gabi_4Real" target="_blank">
                <img className="contact-image" src="images/icons/twitter icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://mailto:tenagabriel13@gmail.com" target="_blank">
                <img className="contact-image" src="images/icons/gmail icon.webp" alt="" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
     </div>
    )
}

export default SideBar;