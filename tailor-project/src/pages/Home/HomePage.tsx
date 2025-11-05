import Headers from "../../components/Headers";
import Headline from "./Headline";
import HeroSec from "./HeroSec";
import Content from "./Content";
import Popular from "./popular";
import Logos from "./logos";
import Footer from "../../components/footer";

function HomePage() {
  return (
    <div className="home-bx">
       <Headers />
        <HeroSec />
        <Headline />
        <Content />
        <Popular />
        <Logos />
        <Footer />
    </div>
  );
}

export default HomePage;
