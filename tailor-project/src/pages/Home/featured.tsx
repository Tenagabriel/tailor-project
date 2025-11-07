import "./featured.css";

function Featured() {
  return (
    <>
      <div className="feat-max-bx">
        <div className="feat-sec-bx">
            <h2 className="feat-sec-name">Featured Tailors</h2>
        </div>

        <div className="feat-main-bx">

          <div className="feat-bx">
                <div className="feat-img-bx">
                    <img className="feat-img" src="images/illustration-images/featured1.png" alt="" />
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
          </div>

          <div className="feat-bx">
             <div className="feat-img-bx">
                <img className="feat-img" src="images/illustration-images/featured2.png" alt="" />
             </div>
                <h2>Ajoke Ayinde</h2>
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
          </div>

          <div className="feat-bx">   
             <div className="feat-img-bx">
                <img className="feat-img" src="images/illustration-images/featured3.png" alt="" />
             </div>
              <h2>Ibrahim Afolabi</h2>  
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
          </div>

        </div>
      </div>
    </>
  );
}

export default Featured;
