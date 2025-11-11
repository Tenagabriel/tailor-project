import Headers from "../../components/Headers";
import Support from "../../components/support";
import Headline from "../../components/Headline";
import HeroSec from "../../components/HeroSec";
import Works from "../../components/works";
import Featured from "../../components/featured";
import Choose from "../../components/choose";
import Reviews from "../../components/reviews";
import Logos from "../../components/logos";
import Footer from "../../components/footer";

function HomePage() {
  return (
    <div className="home-bx">
       <Headers />
       <Support />
        <HeroSec />
        <Headline />
        <Works />
        <Featured />
        <Choose />
        <Reviews />
        <Logos />
        <Footer />
    </div>
  );
}

export default HomePage;
