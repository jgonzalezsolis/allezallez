import React, { useEffect, useState } from 'react'
import Form from '../components/form'
import Nav from '../components/Nav';
import DisplayAll from '../components/DisplayAll';




const View = (props) => {

    const [allRoutes, setAllRoutes] = useState([]);

    return (
    <div>
        <Nav />
        <DisplayAll />
    </div>
    )
}

export default View