import HomePage from './pages/Home/HomePage'
import TrendPage from './pages/trend/TrendPage'
import BrowseTailorsPage from './pages/browse/brosweTailorsPage'
import {Routes, Route} from 'react-router'
import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route index element={ <HomePage />} />
      <Route path='/trend' element={<TrendPage />}/>
      <Route path='/browse' element={<BrowseTailorsPage />}/>
    </Routes>
    </>
  )
}

export default App
