import React, { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import { fetchProducts } from '../functions'
import '../App.css'

function Home() {

  const [products, setProducts] = useState([])

  const handleClick = async (input) => {
   const results = await fetchProducts(input);
   setProducts(results)
   
  }

  return (
    <div className='home'>
      <Header handleClick={handleClick} />
      <div className='cards'>
      {products.map((item) => (
        <Card item={item} />
      ))}
      </div>
    </div>
  )
}

export default Home