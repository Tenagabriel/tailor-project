import { useRef } from "react";
import illustrationDetails from "../utils";

function Popular() {
  const sliderRef = useRef<HTMLDivElement>(null)

function nextButton() {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300; 
    }
  }


    function prevButton() {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300; 
    }
  }

  return (
    <>
      <h1 className="popular-category-text">See popular Categories.</h1>
      <div className="popular-cnt">
        <img
          className="prev-btn"
          src="images/icons/less-than-symbol.png"
          alt=""
          onClick={prevButton}
        />
        <div className="popular-slider" ref={sliderRef}>
          {illustrationDetails.map((illustrationDetail) => {
            return (
              <div className="popular-slide" key={illustrationDetail.id}>
                <img className="illustration-img" src={illustrationDetail.image} />
                <p className="illustration-title">
                  ${illustrationDetail.imageTitle}
                </p>
              </div>
            );
          })}
        </div>
        <img
          className="nxt-btn"
          src="images/icons/greater-than-symbol.png"
          alt=""
          onClick={nextButton}
        />
      </div>
    </>
  );
}

export default Popular;
