import Headers from "../../components/Headers";
import RegFx from "./regFx";
import SignInPop from "./signup";
import Support from "./support";
import Headline from "./Headline";
import HeroSec from "./HeroSec";
import Works from "./works";
import Featured from "./featured";
import Choose from "./choose";
import Reviews from "./reviews";
import Logos from "./logos";
import Footer from "../../components/footer";


type toggleFunc = {
  isSign: boolean;
  isReg: boolean;
  setIsReg: (isReg: boolean) => void;
  regClick: () => void;
  cancelSign: () => void;
  regDetails: () => void;
  signDetails: () => void
}

function HomePage({isSign, isReg, setIsReg, regClick, cancelSign, regDetails, signDetails}: toggleFunc) {

  return (
    <div className="home-bx">
       <Headers regClick={regClick} />
       <Support />
        <HeroSec />
        <RegFx isReg={isReg} cancelReg={() => setIsReg(false)} signDetails={signDetails} />
        <SignInPop isSign={isSign} regDetails={regDetails} cancelSign={cancelSign} /> 
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
