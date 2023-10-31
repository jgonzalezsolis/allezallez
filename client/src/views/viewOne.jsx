import React, { useEffect, useState } from 'react'
import Form from '../components/form'
import Nav from '../components/Nav';
import DisplayAll from '../components/DisplayAll';
import OneRoute from '../components/OneRoute';




const ViewOne = (props) => {

    // const [allRoutes, setAllRoutes] = useState([]);


    return (
    <div>
        <Nav />
        <OneRoute/>
    </div>
    )
}

export default ViewOne