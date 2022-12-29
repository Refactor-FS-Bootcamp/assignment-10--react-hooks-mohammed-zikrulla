import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Setlist from './Setlist'
import "./Setitem.css"

const SpaceList = () => {
    const [chars, setChars] = useState([])

    useEffect(() => {
        const fetchChars = async () => {
            const url = 'https://fakestoreapi.com/products/'
            const res = await axios.get(url)
            setChars(res.data)
        }
        fetchChars()
    },[])

    return (
        <div className='parent_container'>
          { chars.map(char => <Setlist key={char.id} char={char} />) }
        </div>
    )
}

export default SpaceList