
import {useState, useEffect} from "react";

function HeroSec() {

  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "/images/illustration-images/hero-prospect-tailor-img.png",
    "/images/illustration-images/hero-prospect-tailor-2-img.jpg",
    "/images/illustration-images/hero-prospect-tailor-3-img.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        return (prev + 1) % slides.length}
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);


    return (
      <div className="hero-bx">

       <div className="hero-slider">
           {slides.map((src, i) => {
          return <img
            key={i}
            src={src}
            alt={`Tailor ${i + 1}`}
            className={`hero-slide ${i === activeIndex ? "active" : ""}`}
          />
        })}
       </div>
       
       
      <div className="slider-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          ></span>
        ))}
      </div>

        <div className="hero-bg-bx"></div>
        
        <div className="Desc-bx">
          <h1>Connecting Tailors <br/>and Customers Seamlessly</h1>
          <h3>Discover a seamless platform where tailors and customers connect effortlessly. 
            Explore skilled professionals, showcase your creative work, or find the perfect tailor for your next project. 
            My-Tailor bridges creativity and opportunity, empowering tailors to grow their craft while helping customers experience 
            fashion made to fit their unique style and vision.</h3>
          <div>
            <a className="hero-btn1" href="/browse">Browse Tailors</a>
            <a className="hero-btn2" href="/">Upload your work</a>
          </div>
        </div>
      </div>
    )
}

export default HeroSec;