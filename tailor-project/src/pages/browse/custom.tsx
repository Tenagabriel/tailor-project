import { useState } from "react";
import "./custom.css";

function customized() {
  const [isDistanceAsc, setIsDistanceAsc] = useState(true);
  const [isSpecAsc, setIsSpecAsc] = useState(true);
    const [isRateAsc, setIsRateAsc] = useState(true);

  const handleDistanceClick = () => {
    setIsDistanceAsc(!isDistanceAsc);
  };

  const handleDistCloseClick = () => {
    setIsDistanceAsc(true);
  };

    const handleSpecClick = () => {
    setIsSpecAsc(!isSpecAsc);
  };

  const handleSpecCloseClick = () => {
    setIsSpecAsc(true);
  };

  const handleRateClick = () => {
    setIsRateAsc(!isRateAsc);
  };

  const handleRateCloseClick = () => {
    setIsRateAsc(true);
  };




  return (
    <>
      <div className="cus-max-bx">
        <div className="cus-max2-bx">
          <div className="cus-main-bx">
            <p>Distance</p>
            <img
              onClick={handleDistanceClick}
              style={{ display: !isDistanceAsc ? "none" : "block" }}
              className="arrow-downp-img"
              src="images/icons/down-arrow.png"
              alt=""
            />
            <img
              onClick={handleDistCloseClick}
              style={{ display: isDistanceAsc ? "none" : "block" }}
              className="arrow-up-img"
              src="images//icons/up-arrow-angle.png"
              alt=""
            />
          </div>
          <div className={`distlistmaxbx ${!isDistanceAsc ? "open" : ""}`}>
            <li className="distlist">
              <p>5km</p>
              <input type="radio" />
            </li>
            <li className="distlist">
              <p>10km</p>
              <input type="radio" />
            </li>
            <li className="distlist">
              <p>20km</p>
              <input type="radio" />
            </li>
            <li className="distlist">
              <p>30km</p>
              <input type="radio" />
            </li>
            <li className="distlist">
              <p>40km</p>
              <input type="radio" />
            </li>
            <li className="distlist">
              <p>50km</p>
              <input type="radio" />
            </li>
            <li className="distlist">
              <p>60km</p>
              <input type="radio" />
            </li>
          </div>
        </div>

        <div className="cus-max2-bx">
          <div className="cus-main-bx">
            <p>Specialty</p>
            <img
              onClick={handleSpecClick}
              style={{ display: !isSpecAsc ? "none" : "block" }}
              className="arrow-downp-img"
              src="images/icons/down-arrow.png"
              alt=""
            />
            <img
              onClick={handleSpecCloseClick}
              style={{ display: isSpecAsc ? "none" : "block" }}
              className="arrow-up-img"
              src="images//icons/up-arrow-angle.png"
              alt=""
            />
          </div>
          <div className={`distlistmaxbx ${!isSpecAsc ? "open" : ""}`}>
            <li className="distlist">
              <p>Male</p>
              <input type="radio" />
            </li>
            <li className="distlist">
              <p>Female</p>
              <input type="radio" />
            </li>
            <li className="distlist">
              <p>Unisex</p>
              <input type="radio" />
            </li>
          </div>
        </div>

        <div className="cus-max2-bx">
          <div className="cus-main-bx">
            <p>Rating</p>
            <img
              onClick={handleRateClick}
              style={{ display: !isRateAsc ? "none" : "block" }}
              className="arrow-downp-img"
              src="images/icons/down-arrow.png"
              alt=""
            />
            <img
              onClick={handleRateCloseClick}
              style={{ display: isRateAsc ? "none" : "block" }}
              className="arrow-up-img"
              src="images//icons/up-arrow-angle.png"
              alt=""
            />
          </div>
          <div className={`distlistmaxbx ${!isRateAsc ? "open" : ""}`}>
            <li className="distlist">
              <p>Good</p>
              <input type="radio" />
            </li>
            <li className="distlist">
              <p>Very Good</p>
              <input type="radio" />
            </li>
            <li className="distlist">
              <p>Excellent</p>
              <input type="radio" />
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default customized;

/*

     <div className="cus-max-bx">
        <div className="cus-main-bx">
          <div className="distmaxbx">
            <div className="cus-bx">
              <p>Distance</p>
              <img
                onClick={handleDistanceClick}
                style={{ display: !isDistanceAsc ? "none" : "block" }}
                className="arrow-downp-img"
                src="images/icons/down-arrow.png"
                alt=""
              />
              <img
                onClick={handleDistCloseClick}
                style={{ display: isDistanceAsc ? "none" : "block" }}
                className="arrow-up-img"
                src="images//icons/up-arrow-angle.png"
                alt=""
              />
            </div>
            <div className="distlistmaxbx">
              <li className="distlist">
                <p>5km</p>
                <input type="radio" />
              </li>
              <li className="distlist">
                <p>5km</p>
                <input type="radio" />
              </li>
              <li className="distlist">
                <p>5km</p>
                <input type="radio" />
              </li>
              <li className="distlist">
                <p>5km</p>
                <input type="radio" />
              </li>
              <li className="distlist">
                <p>5km</p>
                <input type="radio" />
              </li>
              <li className="distlist">
                <p>5km</p>
                <input type="radio" />
              </li>
              <li className="distlist">
                <p>5km</p>
                <input type="radio" />
              </li>
            </div>
          </div>
          <div className="cus-bx">
            <p>Specialty</p>
            <img
              className="arrow-downp-img"
              src="images/icons/down-arrow.png"
              alt=""
            />
          </div>
          <div className="cus-bx">
            <p>Rating</p>
            <img
              className="arrow-downp-img"
              src="images/icons/down-arrow.png"
              alt=""
            />
          </div>
        </div>
      </div>
*/
