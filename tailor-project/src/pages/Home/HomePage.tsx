import Headers from "../../components/Headers";
import Headline from "./Headline";
import HeroSec from "./HeroSec";
import Works from "./works";
import Featured from "./featured";
import Popular from "./popular";
import Logos from "./logos";
import Footer from "../../components/footer";

function HomePage() {
  return (
    <div className="home-bx">
       <Headers />
        <HeroSec />
        <Headline />
        <Works />
        <Featured />
        <Popular />
        <Logos />
        <Footer />
    </div>
  );
}

export default HomePage;
