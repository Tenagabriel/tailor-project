import "./ClothingPop.css";
type exploreTypes = {
  isClothing: boolean;
  clothingDetails: () => void;
  leaveClothing: () => void;
};

function ClothingPop({
  isClothing,
  clothingDetails,
  leaveClothing,
}: exploreTypes) {
  return (
    <div
      className="clothing-popup"
      onMouseEnter={clothingDetails}
      onMouseLeave={leaveClothing}
      style={{
        opacity: isClothing === false ? 0 : 1,
        pointerEvents: isClothing === false ? "none" : "auto",
      }}
    >
      <div className="browse-box">
        <h4>Browse Wears</h4>
        <div className="browse-items">
          <ul>
            <li>
              <a href="">Top Rated Searches</a>
            </li>
            <li>
              <a href="">T-Shirts & Vests</a>
            </li>
            <li>
              <a href="">Shirts</a>
            </li>
            <li>
              <a href="">Shorts</a>
            </li>
            <li>
              <a href="">Suits & Tailring</a>
            </li>
            <li>
              <a href="">Cargo Trousers</a>
            </li>
            <li>
              <a href="">Jackets and Coats</a>
            </li>
            <li>
              <a href="">Hoodies & Sweatshirts</a>
            </li>
            <li>
              <a href="">Joggers</a>
            </li>
            <li>
              <a href="">Jumpers & Cardigans</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Polo Shirts</a>
            </li>
            <li>
              <a href="">TrackSuits</a>
            </li>
            <li>
              <a href="">Trousers & Chinos</a>
            </li>
            <li>
              <a href="">Premium</a>
            </li>
            <li>
              <a href="">C0-ords</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="gender-tailor-box">
        <h4>Browse by Tailor's Gender</h4>
        <div className="gender-gen-cnt">
          <a href="">
            <div className="gen-gen-cnt">
              <div className="gender-pic-cnt">
                <div className="gender-img-cnt">
                  <img
                    className="gender-img"
                    src="images/illustration-images/standing-male-tailor.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <span>Male tailors</span>
              </div>
            </div>
          </a>
          <a href="">
            <div className="gen-gen-cnt">
              <div className="gender-pic-cnt">
                <div className="gender-img-cnt">
                  <img
                    className="gender-img"
                    src="images/illustration-images/female-standing-tailor.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <span>Female tailors</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="edit-box">
        <h4>Browse by Edit</h4>
        <ul>
          <li>
            <a className="edit-links" href="">
              <div className="edit-img-cnt">
                <img
                  className="edit-img"
                  src="images/illustration-images/wedding-gown-one.jpg"
                  alt=""
                />
              </div>
              <div>
                <span>Weddings</span>
              </div>
            </a>
          </li>
          <li>
            <a className="edit-links" href="">
              <div className="edit-img-cnt">
                <img
                  className="edit-img"
                  src="images/illustration-images/office-gown-women.jpg"
                  alt=""
                />
              </div>
              <div>
                <span>WorkWear</span>
              </div>
            </a>
          </li>
          <li>
            <a className="edit-links" href="">
              <div className="edit-img-cnt">
                <img
                  className="edit-img"
                  src="images/illustration-images/native-attire.jpg"
                  alt=""
                />
              </div>
              <div>
                <span>Occasionwear</span>
              </div>
            </a>
          </li>
          <li>
            <a className="edit-links" href="">
              <div className="edit-img-cnt">
                <img
                  className="edit-img"
                  src="images/illustration-images/beach-woman-one.jpg"
                  alt=""
                />
              </div>
              <div>
                <span>Beachwear</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ClothingPop;
