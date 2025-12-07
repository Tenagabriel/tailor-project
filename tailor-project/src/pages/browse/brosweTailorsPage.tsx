import Headers from "../../components/Headers";
import Support from "../Home/support";
import ProfHero from "./profHero";
import RegFx from "../Home/regFx";
import SignInPop from "../Home/signup";
import Customized from "./custom";
import TailorProfile from "./Profile";
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

function BrowseTailorsPage({isSign, isReg, setIsReg, regClick, cancelSign, regDetails, signDetails}: toggleFunc) {

    return (
        <>
         <Headers regClick={regClick} />
         <Support />
         <ProfHero />
         <RegFx isReg={isReg} cancelReg={() => setIsReg(false)} signDetails={signDetails} />
         <SignInPop isSign={isSign} regDetails={regDetails} cancelSign={cancelSign} /> 
         <Customized />
         <TailorProfile/>
         <Footer />
        </>
    )
}

export default BrowseTailorsPage;