import './header.css'

function Headers() {
  return (
    <>
      <div className="closet-header">
        <div className="header-top">
          <div className="closet-left-section">
            <div className="menu-box">
              <button className="menu-btn">
                <img
                  className="menu-img"
                  src="images/icons/hamburger-menu.png"
                  alt=""
                />
              </button>
            </div>
            <h1 className="brand-name">My-Tailor</h1>
            <p className="closet-motto">
              Finding you the best tailors for any outfit!
            </p>
          </div>
          <div className="closet-middle-section">
            <input
              className="search-bar js-search-bar"
              placeholder="Search your occasion"
              type="text"
            />
            <span>
              <img
                className="search-icon"
                src="images/icons/search-icon.png"
                alt=""
              />
            </span>
          </div>
          <div className="closet-right-section">
            <a className="trend-link" href="/trend">
              <button className="see-brand-button js-trend-button">
                See top brands ➔
              </button>
            </a>
            <img
              className="right-search-icon"
              src="images/icons/search.png"
              alt=""
            />
            <button className="user-icon-button">
              <img className="user-icon-img" src="images/icons/people.png" />
              <div className="user-arrow">
                <img
                  className="down-arrow-img"
                  src="images/icons/down-arrow.png"
                  alt=""
                />
                <img
                  className="up-arrow-img"
                  src="images/icons/up-arrow-angle.png"
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <nav>
          <ul className="headers-ul">
            <li className="headers-ul-li-explore">Explore</li>
            <li className="headers-ul-li">Trending</li>
            <li className="headers-ul-li">Tailoring</li>
            <li className="headers-ul-li">Womens</li>
            <li className="headers-ul-li">Mens</li>
            <li className="headers-ul-li">Discover</li>
            <li className="headers-ul-li">Brands</li>
            <li className="headers-ul-li">About</li>
            <li className="headers-ul-li">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Headers;
