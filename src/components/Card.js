import React from 'react'
import { Link } from 'react-router-dom'

function Card({ item }) {
    const { id, title, available_quantity, thumbnail, sold_quantity } = item

const editTitle = (title) => {
    if(title.length>40){
        return title.slice(0,35) + '...' 
    }
    return title
} 

    return (
        <Link to={`/${id}`}>
            <h3>{editTitle(title)}</h3>
            <p>Available Quantity:<span>{available_quantity}</span></p>
            <p>Sold Quantity:<span>{sold_quantity}</span></p>
            <img alt={title} src={thumbnail} />
        </Link>
    )
}

export default Card