import React, { useEffect, useState, useParams } from 'react'
import UpdateForm from '../components/UpdateForm';
import Nav from '../components/Nav';




const Edit = (props) => {

    const [allRoutes, setAllRoutes] = useState([]);
    const [route, setRoute] = useState ({
        state: '',
        city: '',
        start: '',
        end: '',
        rating: 0,
        distance: 0,
        suggestions: ''
    })


    return (
    <div>
        <UpdateForm route={route}  />
    </div>
    )
}

export default Edit