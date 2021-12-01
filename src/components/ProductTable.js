import React from 'react';
import ProductRow from './ProductRow';
export default function ProductTable (props) {
    const {data} = props
            return(
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(item=>{
                        return(
                        <tr>
                            <ProductRow item={item} />
                        </tr>
                        
                        )
                    })
                }
                </tbody>
                </table>
            )

}