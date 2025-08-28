import './nav.css'
 
type exploreTypes = {
  isShowing: boolean
  exploreDetails: () => void;
  leaveExplore: () => void;
}


function ExplorePop({isShowing, exploreDetails, leaveExplore}: exploreTypes) {
    return (

 <div className="explore-popup" 
 onMouseEnter={exploreDetails}  
 onMouseLeave={leaveExplore} 
 style={{opacity: isShowing === false ? 0 : 1,   pointerEvents: isShowing === false ? 'none' : 'auto'}}>
     <div className="womens-box">
      <h4>Womens wears</h4>
      <ul>
        <li>
          <a className="explore-links" href="">
            <div>
               <div className='nav-imgs-cont'>
                <img className='nav-imgs' src="images/illustration-images/female-red-gown.jpg" alt="" />
               </div>
            </div>
            <div className='nav-txt-cnt'>
              <span className='nav-txt'> Gowns</span>
            </div>
          </a>
        </li>
        <li>
           <a className="explore-links" href="">
            <div>
               <div className='nav-imgs-cont'>
                <img className='nav-imgs' src="images/illustration-images/in-law-visit-gown.jpg" alt="" />
               </div>
            </div>
            <div className='nav-txt-cnt'>
              <span className='nav-txt'> Ankara</span>
            </div>
          </a>
        </li>
        <li>
           <a className="explore-links" href="">
            <div>
               <div className='nav-imgs-cont'>
                <img className='nav-imgs' src="images/illustration-images/walk-oufit.jpg" alt="" />
               </div>
            </div>
            <div className='nav-txt-cnt'>
              <span className='nav-txt'> Jeans</span>
            </div>
          </a>
        </li>
        <li>
           <a className="explore-links" href="">
            <div>
               <div className='nav-imgs-cont'>
                <img className='nav-imgs' src="images/illustration-images/ankara-women-one.jpg" alt="" />
               </div>
            </div>
            <div className='nav-txt-cnt'>
              <span className='nav-txt'> Palazzo</span>
            </div>
          </a>
        </li>
        <li>
           <a className="explore-links" href="">
            <div>
               <div className='nav-imgs-cont'>
                <img className='nav-imgs' src="images/illustration-images/office-gown-women.jpg" alt="" />
               </div>
            </div>
            <div className='nav-txt-cnt'>
              <span className='nav-txt'> Skirts & Blouses</span>
            </div>
          </a>
        </li>
      </ul>
     </div>
    <div className="mens-box">
      <h4>Mens wears</h4>
      <ul>
        <li>
          <a className="explore-links" href="">
            <div>
               <div className='nav-imgs-cont'>
                <img className='nav-imgs' src="images/illustration-images/church-native-attire-men.jpg" alt="" />
               </div>
            </div>
            <div className='nav-txt-cnt'>
              <span className='nav-txt'>Natives</span>
            </div>
          </a>
        </li>
        <li>
           <a className="explore-links" href="">
            <div>
               <div className='nav-imgs-cont'>
                <img className='nav-imgs' src="images/illustration-images/grooms-men.jpg" alt="" />
               </div>
            </div>
            <div className='nav-txt-cnt'>
              <span className='nav-txt'>Jackets</span>
            </div>
          </a>
        </li>
        <li>
           <a className="explore-links" href="">
            <div>
               <div className='nav-imgs-cont'>
                <img className='nav-imgs' src="images/illustration-images/loverboy-dinner-suit-men.jpg" alt="" />
               </div>
            </div>
            <div className='nav-txt-cnt'>
              <span className='nav-txt'> Suits</span>
            </div>
          </a>
        </li>
        <h5>New In: Today</h5>
        <h5>New In: Selling Fast</h5>
        <li>
           <a className="explore-links" href="">
            <div>
               <div className='nav-imgs-cont'>
                <img className='nav-imgs' src="images/illustration-images/owambe-native-men.jpg" alt="" />
               </div>
            </div>
            <div className='nav-txt-cnt'>
              <span className='nav-txt'>More</span>
            </div>
          </a>
        </li>
      </ul>
     </div>
     <div className="brand-box">
      <h4>Brands</h4>
      <ul>
        <li>
          <a className="explore-links" href="">Castitch Fashion House</a>
        </li>
        <li>
          <a className="explore-links" href="">Easy Fits Clothing</a>
        </li>
        <li>
          <a className="explore-links" href="">Naires Fashion Concept</a>
        </li>
        <li>
          <a className="explore-links" href="">Sisi Satoria</a>
        </li>
      </ul>
     </div>
   </div>
    )
}

export default ExplorePop;