import React, { useEffect, useState } from 'react'
import Form from '../components/form'
import Nav from '../components/Nav';




const Add = (props) => {
    const [allRoutes, setAllRoutes] = useState([]);
    const [route, setRoute] = useState ({

    })

    return (
    <div>
        <Nav />
        <Form allRoutes={allRoutes} route={route} />
    </div>
    )
}

export default Add