import React, {useState} from 'react'
import './Movie.css';


function Navbar() {
    const [name, setName] = useState("");

    return (
        <div className='navbar'>
            <span>KINO</span>
            <label>Search</label>

        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
    )
}

export default Navbar
