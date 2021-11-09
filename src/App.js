//import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header.js';
import Sorting from "./components/Sorting";
import StoreItems from "./components/StoreItems";

function App() {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setItems(itemsFromServer);
    }

    getItems();
  }, [])

  const fetchItems = async () => {
    try {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data  
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <Header/>
      <main>
      <Sorting/>
      <StoreItems items={items}/>
      </main>
    </div>
  );
}

export default App;


