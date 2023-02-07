import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchDetails, addProduct } from '../functions'
import './ProductStyles.css'

function Product() {
  const { id } = useParams()
  const [price, setPrice] = useState('')
  const [attributes, setAttributes] = useState([])
  const [thumbnail, setThumbnail] = useState('')
  const [availableQ, setAvailableQ] = useState(0)
  const [soldQ, setSoldQ] = useState(0)
  const [title, setTitle] = useState('')


  useEffect(() => {
    fetchDetails(id).then((data) => {
      setPrice(data.price)
      setAttributes(data.attributes.slice(0, 10))
      setThumbnail(data.thumbnail)
      setAvailableQ(data.available_quantity)
      setSoldQ(data.sold_quantity)
      setTitle(data.title)
    })

  }, [])

  const handleClick = () => {
    const product = { id, title, price, thumbnail }
    addProduct(product)
  }



  return (

    <div>

      <div className='buttons'>
        <nav><Link to='/'>Home</Link><Link to='/checkout'>Checkout</Link></nav>
      </div>

      <div className='body'>
        {title ? <div className='product'>
          <h2>{title}</h2>
          <img src={thumbnail} alt={title}></img>
          <ul>{attributes.map((item) => (
            <li>{`${item.name}: ${item.value_name || 'Não'}`}</li>
          )
          )}</ul>
          <p>{price}</p>
          <p>Available Quantity:<span>{availableQ}</span></p>
          <p>Sold Quantity:<span>{soldQ}</span></p>
          <button onClick={handleClick}>Add to Cart</button>


        </div> : <p>Loading...</p>}

      </div>

    </div>
  )
}

export default Product