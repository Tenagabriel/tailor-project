import { useState } from "react";
import allTailorBrands from "../../utils/tailorProfile";
import "./profile.css";

const TailorProfile = () => {
  const [isDot, setIsDot] = useState<number|null>(null)

  return (
    <>
      <div className="search-brand-bx">
      <input className="search-brand" 
      placeholder="Search brands"
      type="text" />
      </div>
      <div className="btailor-main-bx">
      {allTailorBrands.map((tailorBrand, index) => {
         return (
          <div className="brand-main-bx"
          onMouseEnter={() => {setIsDot(index)}}
          onMouseLeave={() => {setIsDot(null)}}
          >
           <img className="brand-imgs" src={tailorBrand.image} alt="" />
           <div className="dots-bx" style={{opacity: isDot === index ? '1' : '0'}}>
              <div className="tooltip">More action</div>
             <img className="dots-img" src="images/illustration-images/dots_three_icon.png" alt="" />
           </div>
          </div>
         )
      })}
    </div>
    </>
  );
};

export default TailorProfile;





/*import { useState } from "react";
import alltailorprofile from "../../utils/tailorProfile";
import "./profile.css";

function TailorProfile() {
  const [rating, setRating] = useState(0); 
 
  const stars = [1, 2, 3, 4, 5];


  return (
    <div className="btailor-main-bx">
        {alltailorprofile.map((tailorProfile) => {
        return (
       <div className="btailor-semi-bx">
        <div className="btailor-img-bx">
          <img
            className="btailor-img"
            src={tailorProfile.image}
            alt="Tailor profile"
          />
        </div>

        <div className="btailor-details-bx">
          <div className="btailor-brand-bx">
            <p className="btailor-brand-name">Brand name: {tailorProfile.name}</p>
          </div>

          <div className="btailor-rating-bx">
            <p className="btailor-rating-text">Rating: </p>
         {stars.map((star) => (
              <span 
              className={rating >= star ? 'star filled' : "star"  }
              onClick={() => {setRating(star)}}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
        )
      })}
    </div>
    
  );
}
export default TailorProfile;  
*/


