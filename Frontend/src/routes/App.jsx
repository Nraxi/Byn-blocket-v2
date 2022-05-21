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
import Backoffice from './Backoffice';

const { Product, Categorie: Category } = factory;



function App() {

  // let s = useStates('main', {
  //   products: [],
  //   categories: [],
  //   chosenCategoryId: 0,
  //   cartContents: []
  // });

  // useEffect(() => {
  //   (async () => {
  //     // get the categories from the db
  //     s.categories = await Category.find();
  //     // get the products from the db
  //     s.products = await Product.find();

  //   })();
  // }, []);

  // return (s.products.length === 0 ? null :

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
        <Route path='/Backoffice' element={<Backoffice />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </Router>

  )
}

export default App
