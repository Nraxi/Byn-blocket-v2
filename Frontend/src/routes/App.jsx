import '../css/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { factory } from '../../utilities/FetchHelper';


import Startsida from './Startsida'
import Shop from './Shop';
import Checkout from './checkout';
import Errorpage from './Errorpage';
import NavMenu from '../../Nav-bar/navMenu';
import Varukorg from './Varukorg';
import Produktsida from './Produktsida';
import Beställning from './Beställning';

const { Product, Categorie: Category } = factory;


useEffect(() => {
  (async () => {
    // get the categories from the db
    s.categories = await Category.find();
    // get the products from the db
    s.products = await Product.find();
    // initilize the shopping cart
    // (this provides local storage of cartContents)
    init(s, 'cartContents');
  })();
}, []);


function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Startsida />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Produktsida' element={<Produktsida />} />
        <Route path='/Varukorg' element={<Varukorg />} />
        <Route path='/Beställning' element={<Beställning />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </Router>

  )
}

export default App
