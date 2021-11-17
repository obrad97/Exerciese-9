import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header.js';
import StoreItems from "./components/StoreItems";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Modal from "./components/Modal"
import Error from "./components/Error";
import { useEffect } from "react";

function App() {

  
  
  return (
    <div className="container">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<StoreItems/>}/>
          <Route path="/product/:id" exact element={<ProductDetails/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
          <Route path="/*" exact element={<Error/>}/>
        </Routes>
        <Modal/>
      </Router>
    </div>
  );
}

export default App;


