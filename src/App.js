//import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header.js';
import Sorting from "./components/Sorting";
import StoreItems from "./components/StoreItems";

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState();
  const [filter, setFilter] = useState();

  useEffect(()=> {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    }

    const getCategory = async () => {
      const categoriesFromServer = await fetchCategory();
      setCategories(categoriesFromServer);
    }

    getItems();
    getCategory();
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

  const fetchCategory = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products/categories')
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error);
    }
  }

  const sortProducts = (event) => {
    console.log(event.target.value);
  }

  const filterProducts = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className="container">
      <Header/>
      <main>
      <Sorting 
      categories = {categories}
      count = {items.length}
      sort = {sort}
      filter = {filter}
      sortProducts = {sortProducts}
      filterProducts = {filterProducts}
      />
      <StoreItems items={items}/>
      </main>
    </div>
  );
}

export default App;


