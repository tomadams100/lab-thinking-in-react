import React from 'react';
export default function ProductRow (props) {
    const item = props.item
    return(
        <>
        <td>{item.name}</td>
        <td>{item.price}</td>
        </>
    )
}