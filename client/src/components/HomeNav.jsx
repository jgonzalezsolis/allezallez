import React from 'react'
import {Link } from 'react-router-dom'
const HomeNav = () => {
    return (
        <div>
            <Link to={'/allRoutes'} className="write-note-link"> See Routes </Link>
            {/* <Link to={'/'} className="write-note-link"> Logout </Link> */}
        </div>
    )
}

export default HomeNav