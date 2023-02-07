import React, { useState } from 'react'
import './HeaderStyles.css'


function Header({ handleClick }) {
    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleClick(input)
        setInput('')
    }

    return (
        <div className='home'>
            <h2>João's Market</h2>
            <h3>Whatever you need, in just one place!</h3>
            <form>
                <input type='text' value={input} onChange={handleChange}></input>
                <button onClick={handleSubmit}>Search</button>
            </form>

        </div>
    )
}

export default Header