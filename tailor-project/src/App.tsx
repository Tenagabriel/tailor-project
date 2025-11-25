import { useState } from 'react'
import HomePage from './pages/Home/HomePage'
import TrendPage from './pages/trend/TrendPage'
import BrowseTailorsPage from './pages/browse/brosweTailorsPage'
import {Routes, Route} from 'react-router'
import './App.css'

function App() {
 
  const [isReg, setIsReg] = useState(false);
const [isSign, setIsSign] = useState(false);

 function regClick() {
    setIsReg(!isReg);
  }


  function signDetails() {
    setIsReg(false);
    setIsSign(true);
  }

  function regDetails() {
    setIsSign(false);
    setIsReg(true);
  }

  function cancelSign() {
    setIsSign(false);
  }



  return (
    <>
    <Routes>
      <Route index element={ <HomePage isSign={isSign} isReg={isReg} setIsReg={setIsReg} regClick={regClick} signDetails={signDetails} regDetails={regDetails} cancelSign={cancelSign} />} />
      <Route path='/trend' element={<TrendPage />}/>
      <Route path='/browse' element={<BrowseTailorsPage isSign={isSign} isReg={isReg} setIsReg={setIsReg} regClick={regClick} signDetails={signDetails} regDetails={regDetails} cancelSign={cancelSign} />}/>
    </Routes>
    </>
  )
}

export default App
