import allTailorProfiles from "../../utils/profile";
import "./profile.css";

function TailorProfile() {
  return (
    <>
      <div className="prof-max-bx">
        {allTailorProfiles.map((profile) => {
          return (
            <div className="prof-bx" key={profile.id}>
              <div className="prof-img-bx">
                <img className="prof-img" src={profile.image} alt="" />
              </div>
              <h2>{profile.name}</h2>
              <div className="prof-spec-bx">
                <p>{profile.specialty}</p>
              </div>

              <div className="prof-loc-bx">
                <img
                  className="prof-loc-img"
                  src="images/icons/location.png"
                  alt=""
                />
                <p>{profile.location}</p>
              </div>

              <div className="prof-rat-bx">
                <img
                  className="prof-sta-img"
                  src="images/icons/gold-star.png"
                  alt=""
                />
                <p>4.9</p>
              </div>

              <div className="prof-vie-p-bx">
                <p>View Profile</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TailorProfile;

<div className="feat-bx">
  <div className="feat-img-bx">
    <img
      className="feat-img"
      src="images/illustration-images/featured1.png"
      alt=""
    />
  </div>
  <h2>Ngozi Okeke</h2>
  <div className="specialty-bx">
    <p>Male Wears</p>
  </div>

  <div className="location-bx">
    <img className="location-img" src="images/icons/location.png" alt="" />
    <p>Lagos</p>
  </div>

  <div className="rating-bx">
    <img className="star-img" src="images/icons/gold-star.png" alt="" />
    <p>4.9</p>
  </div>

  <div className="view-p-bx">
    <p>View Profile</p>
  </div>
</div>;

/*

          <div className="feat-bx">
            <div className="feat-img-bx">
              <img
                className="feat-img"
                src="images/illustration-images/featured2.png"
                alt=""
              />
            </div>
            <h2>Ajoke Ayinde</h2>
            <div className="specialty-bx">
              <p>Male Wears</p>
            </div>

            <div className="location-bx">
              <img
                className="location-img"
                src="images/icons/location.png"
                alt=""
              />
              <p>Lagos</p>
            </div>

            <div className="rating-bx">
              <img
                className="star-img"
                src="images/icons/gold-star.png"
                alt=""
              />
              <p>4.9</p>
            </div>

            <div className="view-p-bx">
              <p>View Profile</p>
            </div>
          </div>

          <div className="feat-bx">
            <div className="feat-img-bx">
              <img
                className="feat-img"
                src="images/illustration-images/featured3.png"
                alt=""
              />
            </div>
            <h2>Ibrahim Afolabi</h2>
            <div className="specialty-bx">
              <p>Male Wears</p>
            </div>

            <div className="location-bx">
              <img
                className="location-img"
                src="images/icons/location.png"
                alt=""
              />
              <p>Lagos</p>
            </div>

            <div className="rating-bx">
              <img
                className="star-img"
                src="images/icons/gold-star.png"
                alt=""
              />
              <p>4.9</p>
            </div>

            <div className="view-p-bx">
              <p>View Profile</p>
            </div>
          </div>
          */
