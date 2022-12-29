
import React from 'react'
import "./Setlist.css"

const Setlist = ({char}) => {
  return (
    <div className='container'>
        <img src={char.image} alt={char.id} />
        <h1>{char.title}</h1>
        <h2>{char.price}</h2>
        
    </div>
  )
}

export default Setlist