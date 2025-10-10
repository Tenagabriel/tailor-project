import ExplorePop from "./ExplorePop";
import ClothingPop from "./ClothingPop";
import TrendingPop from "./trending";
import { useState } from "react";

function HeadersBottom() {
const [isShowing, setIsShowing] = useState(false)
const [isClothing, setIsClothing] = useState(false)
const [isTrending, setIsTrending] = useState(false)

   function exploreDetails() {
    setTimeout(() => {
     setIsShowing(true)
    }, 400)
   }

   function leaveExplore() {
       setTimeout(() => {
     setIsShowing(false)
    }, 400)
   }

      function clothingDetails() {
    setTimeout(() => {
     setIsClothing(true)
    }, 400)
   }

   function leaveClothing() {
       setTimeout(() => {
     setIsClothing(false)
    }, 400)
   }

   function trendingDetails() {
     setTimeout(() => {
     setIsTrending(true)
      console.log('trending triggered')
    }, 400)
   }


   function leaveTrending() {
       setTimeout(() => {
     setIsTrending(false)
    }, 400)
   }




    return (
   <>
     <div className="header-bottom">
        <nav>
          <ul className="headers-ul">
            <p className="headers-ul-p-explore" 
            onMouseEnter={exploreDetails} 
            onMouseLeave={leaveExplore} 
            style={{background: isShowing === true ? 'rgba(240, 240, 240)' : ''}}>Explore</p>
            <p className="headers-ul-p" 
            onMouseEnter={clothingDetails}
            onMouseLeave={leaveClothing}
            style={{background: isClothing === true ? 'rgba(240, 240, 240)' : ''}}
            >Clothing</p>
            <p className="headers-ul-p"
             onMouseEnter={trendingDetails}
             onMouseLeave={leaveTrending}
             style={{background: isTrending === true ? 'rgba(240, 240, 240)' : ''}}
            >Trending</p>
            <p className="headers-ul-p">Womens</p>
            <p className="headers-ul-p">Mens</p>
            <p className="headers-ul-p">Discover</p>
            <p className="headers-ul-p">Brands</p>
            <p className="headers-ul-p">About</p>
            <p className="headers-ul-p">Contact</p>
          </ul>
        </nav>
      </div>
     
     <ExplorePop exploreDetails={exploreDetails} leaveExplore={leaveExplore} isShowing={isShowing}/>
     <ClothingPop clothingDetails={clothingDetails} leaveClothing={leaveClothing} isClothing={isClothing} />
     <TrendingPop trendingDetails={trendingDetails} leaveTrending={leaveTrending} isTrending={isTrending}/>
   </>
    )
}

export default HeadersBottom;