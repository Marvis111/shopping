import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Home from './Pages/Home';
import Shop from './Pages/Shop'
import Product from './Pages/Product'
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path={'/'} element={<Home/>} />
        <Route exact path={'/Shop'} element = {<Shop/>} />
        <Route exact path={'/Product/:productID'} element = {<Product/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
