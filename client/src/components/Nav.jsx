import React from 'react'
import {Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <Link to={"/main"} className='btn btn-primary mt-2'> Home </Link>
        </div>
    )
}

export default Nav