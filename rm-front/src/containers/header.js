import React from 'react'
import {Link} from 'react-router-dom'


const Header = (props) => {
  return(
    <div className="ui inverted olive menu navbar">
     <Link to="/" className="item"><b>Home</b></Link>
     <Link to="/favorites" className="item"><b>Favorites</b>
     </Link>
   </div>
  )
}

export default Header
