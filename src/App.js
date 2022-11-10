import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Product from './pages/Product/Product';
import Checkout from './pages/checkout/Checkout';
import Confirmation from './pages/confirmation/Confirmation';

import { Route, Routes } from 'react-router-dom'

function App() {

  
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route exact path="/products" element={<Product/>}></Route>
        <Route exact path="/checkout" element={<Checkout />}></Route>
        <Route exact path="/confirmation" element={<Confirmation/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
