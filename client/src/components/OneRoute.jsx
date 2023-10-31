import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from 'axios';
import {Link} from "react-router-dom"
//essentials
//lifting state, 
//forms, 
//needs state, 
//useEffect, 
//axios, 

const OneRoute = (props) => {
    const {id} =useParams();
    // console.log(id)
    const [route, setRoute] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/routes/${id}`)
            .then(res=>{
                console.log(res)
                console.log(res.data)
                setRoute(res.data)
            })
            .catch(err=>{console.log(err)})
    }, [id]);

    const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/routes/${id}`)
        .then(res =>{
            console.log(res)
            navigate("/allRoutes")
        })
        .catch(err => { console.log(err)
        })
    }
    return (
    <div>
        <div>
            <h1>ALLEZ ALLEZ</h1>
            <h1>A place to share routes with other cyclist</h1>
            <h3>Don't run away from your problems cycling is much faster!</h3>
            <p>State: {route.state}</p>
            <p>City: {route.city}</p>
            <p>Starting line: {route.start}</p>
            <p>Finish line: {route.end}</p>
            <p>Rating: {route.rating}</p>
            <p>Distance: {route.distance}</p>
            <p>Tips/Suggestions: {route.suggestions}</p>
            <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
    </div>
    )
}

export default OneRoute