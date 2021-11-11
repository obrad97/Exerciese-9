import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header.js';
import Sorting from "./components/Sorting";
import StoreItems from "./components/StoreItems";
import product from "./components/Product";

function App() {

  return (
    <div className="container">
      <Router>
        <Header/>
        <Routes>
        <Route path="/" exact component={StoreItems}/>
        <Route path="/product/product:id" exact component={product}/>
        <Route>404 Not Found</Route>
        </Routes>
      <main>
      </main>
      </Router>
    </div>
  );
}

export default App;


