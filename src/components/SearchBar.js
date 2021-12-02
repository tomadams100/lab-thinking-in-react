import React, { useState } from 'react';
export default function SearchBar (props) {

    const [checked, setChecked] = useState(false)
    const [filteredItems,setFilteredItems] = useState(props.items)
    
    function handleSearch(event) {
        event.preventDefault()

        if (event.target.type==="checkbox") event.target.checked ? setChecked(true) : setChecked(false)
        else props.filterItems(event.target.value,checked)
    }

    return (
        <form className="search">
        <input onChange={handleSearch} type="text" />
        <br />
        <input value={checked} onChange={handleSearch} type="checkbox" id="inStock" name="inStock" />
        <br />
        <label for="inStock">Only show products in stock</label>
        </form>
    )
}