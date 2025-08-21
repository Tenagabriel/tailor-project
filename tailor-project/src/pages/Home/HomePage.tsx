import Headers from "../../components/Headers";
import Headline from "./Headline";
import HeroSec from "./HeroSec";
import Content from "./Content";
import Popular from "./popular";
import Logos from "./logos";
import Footer from "../../components/footer";

function HomePage() {
  return (
    <>
      <Headers />
      <main>
        <HeroSec />
        <Headline />
        <Content />
        <Popular />
        <Logos />
        <Footer />
      </main>
    
    </>
  );
}

export default HomePage;
