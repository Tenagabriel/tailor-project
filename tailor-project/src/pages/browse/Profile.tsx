import { useState } from "react";
import allTailorBrands from "../../utils/tailorProfile";
import "./profile.css";

const TailorProfile = () => {
  const [isDot, setIsDot] = useState<number | null>(null);
  const [isMoreDetails, setIsMoreDetails] = useState<number | null>(null)
  const [selectedRating, setSelectedRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  function searchProfile(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  return (
    <>
      <div className="search-brand-bx">
        <div className="search-brand-semi-bx">
          <input
            className="search-brand"
            placeholder="Search brands"
            type="text"
            onChange={searchProfile}
          />
          <img
            className="search-brand-icon"
            src="images/icons/search-icon.png"
            alt=""
          />
        </div>
      </div>

      <div className="btailor-main-bx">
        {allTailorBrands.map((tailorBrand, index) => {

          return (
            
            <div
              className="brand-main-bx"
              onMouseEnter={() => {
                setIsDot(index);
              }}
              onMouseLeave={() => {
                setIsDot(null);
              }}
            >
              <img className="brand-imgs" src={tailorBrand.image} alt="" />
              <div
                className="dots-bx"
                style={{ opacity: isDot === index ? "1" : "0" }}
              >
                <div className="tooltip">More action</div>
                <img
                  className="dots-img"
                  src="images/illustration-images/dots_three_icon.png"
                  alt=""
                  onClick={() => {
                    setIsMoreDetails(index)
                  }}
                />
              </div>


              <div 
              className="more-action-popup"
              style={{opacity: isMoreDetails === index ? "1" : "0"}}
              >
                <a className="more-action-link" href="">
                  <img
                    className="more-action-icons"
                    src="images/icons/icons8-eye-50.png"
                    alt=""
                  />
                  Check out brand
                </a>
                <a className="more-action-link" href="">
                  <img
                    className="more-action-icons"
                    src="images/icons/icons8-bookmark-50.png"
                    alt=""
                  />
                  Add to favorites
                </a>
                <a className="more-action-link-d" href="">
                  <img className="more-action-icons" src="images/icons/icons8-comments-50.png" alt="" />
                  comments
                </a>


                <div 
                className="rating-bx"
                >
                  <p>Rating:</p>
                  {stars.map((star) => (
                    <span
                      key={star}
                      onClick={() => setSelectedRating(star)}
                      className={
                        selectedRating >= star ? "star-filled" : "star-empty"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TailorProfile;
