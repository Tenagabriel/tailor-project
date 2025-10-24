function HeroSec() {
    return (
           <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Your Shortcut to Quality Tailors</h1>
          <p className="hero-subtitle">
            Explore real works, choose with confidence, and connect with skilled
            tailors in your area.
          </p>
          <div className="hero-buttons">
            <a href="/browse" className="btn primary-btn">
              Browse Tailors
            </a>
            <a href="#upload" className="btn secondary-btn">
              Upload Your Work
            </a>
          </div>
        </div>
        <div className="hero-bg">
          <img src="images/illustration-images/female-tailor.jpg" alt="" />
        </div>
      </div>
    )
}

export default HeroSec;