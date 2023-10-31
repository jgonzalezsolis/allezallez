import React from 'react'
import {Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <Link to={"/main"}> Home </Link>
            <Link to={'/'} className="write-note-link"> Logout </Link>
            {/* <Link to={'/addProduct'}> Add a product </Link> */}
            {/* <Link to={'/sellProduct'}> Sell a product </Link> */}
        </div>
    )
}

export default Nav