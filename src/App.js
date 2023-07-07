import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';

import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      {/* treba sve da wrap so ShopContextProvider tag za da imaa svite komponente access */}
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
