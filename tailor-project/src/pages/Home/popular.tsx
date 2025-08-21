import illustrationDetails from "../../utils";

function Popular() {
  return (
    <>
      <h1 className="popular-category-text">See popular Categories.</h1>
      <div className="popular-cnt">
        <img
          className="prev-btn"
          src="images/icons/less-than-symbol.png"
          alt=""
        />
        <div className="popular-slider">
          {illustrationDetails.map((illustrationDetail) => {
            return (
              <div className="popular-slide">
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
        />
      </div>
    </>
  );
}

export default Popular;
