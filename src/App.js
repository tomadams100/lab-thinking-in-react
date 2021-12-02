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

  function filterItems(letter,checked) {
    console.log("letter: ", letter)
    console.log("checked: ", checked)
    if(letter==="") setFilteredItems(items.filter(item => item))
    else {
      if (checked) setFilteredItems(items.filter(item => (item.name.toLowerCase().includes(letter.toLowerCase()) && item.stocked === checked)))
      else setFilteredItems(items.filter(item => item.name.toLowerCase().includes(letter.toLowerCase())))
    }
  }

  return (
    <div className="App">
      <h1>Ironstore</h1>
      <SearchBar items={items} filterItems={filterItems}/>
      <ProductTable data={filteredItems}/>
    </div>
  );
}

export default App;
