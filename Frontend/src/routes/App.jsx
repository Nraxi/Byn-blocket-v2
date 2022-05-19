import '../css/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Startsida from './Startsida'
import Shop from './Shop';
import Checkout from './checkout';
import Errorpage from './Errorpage';
import NavMenu from '../../Nav-bar/navMenu';

function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Startsida />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </Router>

  )
}

export default App
