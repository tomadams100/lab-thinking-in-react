import React from 'react';
export default function SearchBar (props) {
    
    function handleSearch(event) {
        event.preventDefault()
        props.filterItems(event.target.value)
    }

    return (
        <form onChange={handleSearch} className="search">
        <input
        type="text"
        />
        <input type="checkbox" id="inStock" name="inStock"
         checked />
        <label for="inStock">Only show products in stock</label>
        </form>
    )
}