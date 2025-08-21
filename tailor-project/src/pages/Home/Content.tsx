function Content() {
  return (
    <div className="main-content">
      <div className="left-main-content">
        <div className="outfits-type-display-box">
          <img
            className="outfit-type-display"
            src="images/illustration-images/fancy-date-night-gown.jpg"
            alt=""
          />
        </div>
        <div className="outfits-type-display-box">
          <img
            className="outfit-type-display"
            src="images/illustration-images/owambe-native-men.jpg"
            alt=""
          />
        </div>
        <div className="outfits-type-display-box">
          <img
            className="outfit-type-display"
            src="images/illustration-images/office-gown-women.jpg"
            alt=""
          />
        </div>
        <div className="outfits-type-display-box">
          <img
            className="outfit-type-display"
            src="images/illustration-images/in-law-visit-gown.jpg"
            alt=""
          />
        </div>
        <div className="outfits-type-display-box outfits-type-display-box-special-two">
          <img
            className="outfit-type-display"
            src="images/illustration-images/university-className-outfit-women.jpg"
            alt=""
          />
        </div>
        <div className="outfits-type-display-box-special">
          <img
            className="outfit-type-display-special"
            src="images/illustration-images/walk-oufit.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="right-main-content">
        <input
          className="category-input"
          placeholder="Search category"
          type="text"
        />
        <h3 className="category-text">Categories</h3>
        <div className="first-set">
          <button className="category-buttons">weddings</button>
          <button className="category-buttons">office wears</button>
          <button className="category-buttons">Beach wears</button>
          <button className="category-buttons">Church</button>
          <button className="category-buttons">seminars</button>
          <button className="category-buttons">summer</button>
          <button className="category-buttons">Concerts</button>
          <button className="category-buttons">Date nights</button>
          <button className="category-buttons">Gym oufits</button>
          <button className="category-buttons">Hiking oufits</button>
          <button className="category-buttons">Haloween</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
