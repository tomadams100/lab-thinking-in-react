import React from 'react';
import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Jsondata from './data.json'
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
//import ProductRow from './components/ProductRow';

function App() {
  const [items, setItems] = useState(Jsondata.data)
  const [filteredItems, setFilteredItems] = useState(Jsondata.data)

  function filterItems(letter) {
    if(letter==="") setFilteredItems(items.filter(item => item))
    else {
      setFilteredItems(items.filter(item => item.name.toLowerCase().includes(letter.toLowerCase())))
    }
  }

  return (
    <div className="App">
      <h1>Ironstore</h1>
      <SearchBar filterItems={filterItems}/>
      <ProductTable data={filteredItems}/>
    </div>
  );
}

export default App;
